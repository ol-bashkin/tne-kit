﻿import { VuexRepositoryBase } from "@tne-kit/core";
import { ExampleEntity } from "@/ExampleEntity";

/* Open for extension but closed for modification */
export class ExampleRepository extends VuexRepositoryBase<ExampleEntity> {
  yourExampleMethod() {
    return null;
  }
}
