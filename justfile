alias pub := publish

# Publish the package (use 'just pub patch', 'just pub minor', or 'just pub major')
publish bump_type="patch":
    #!/usr/bin/env bash
    set -euo pipefail
    
    # Validate bump type
    if [[ ! "{{bump_type}}" =~ ^(patch|minor|major)$ ]]; then
        echo "Error: bump_type must be 'patch', 'minor', or 'major'"
        exit 1
    fi
    
    # Read current version
    current_version=$(node -p "require('./package.json').version")
    echo "Current version: $current_version"
    
    # Parse version components
    IFS='.' read -r major minor patch <<< "$current_version"
    
    # Bump version based on type
    case "{{bump_type}}" in
        major)
            major=$((major + 1))
            minor=0
            patch=0
            ;;
        minor)
            minor=$((minor + 1))
            patch=0
            ;;
        patch)
            patch=$((patch + 1))
            ;;
    esac
    
    new_version="$major.$minor.$patch"
    echo "New version: $new_version"
    
    # Gate on a clean install + tests + build before touching the registry
    npm ci
    npm test
    npm run build

    # Update package.json
    node -e "const fs=require('fs'); const pkg=JSON.parse(fs.readFileSync('package.json','utf8')); pkg.version='$new_version'; fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');"

    # Commit, tag, publish, and push (tag correlates the git ref to the published version)
    git add package.json
    git commit -m "Bump version to $new_version"
    git tag "v$new_version"
    npm publish --access public
    git push --follow-tags