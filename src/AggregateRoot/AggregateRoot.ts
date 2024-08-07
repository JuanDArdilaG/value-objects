import { DomainEvent } from "../DomainEvent/DomainEvent";
import { StringValueObject } from "../StringValueObject";

export abstract class AggregateRoot {
  private domainEvents: Array<DomainEvent>;

  constructor(protected _id: StringValueObject) {
    this.domainEvents = [];
  }

  get id(): StringValueObject {
    return this._id;
  }

  set id(id: StringValueObject) {
    this._id = id;
  }

  pullDomainEvents(): Array<DomainEvent> {
    const domainEvents = this.domainEvents.slice();
    this.domainEvents = [];

    return domainEvents;
  }

  record(event: DomainEvent): void {
    this.domainEvents.push(event);
  }

  abstract toPrimitives(): any;
  abstract fromPrimitives(instance: any): AggregateRoot;
}
