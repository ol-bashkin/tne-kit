import { Guid, IEntity, IGuid } from "@tne-kit/core";

export class ExampleEntity implements IEntity {
  name: string;

  id: IGuid = new Guid();
}
