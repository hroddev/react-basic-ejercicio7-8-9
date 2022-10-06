import { STATUS } from "./status.enum";

export class Contact {
  name = "";
  status = STATUS.OFFLINE;

  constructor(name, status) {
    this.name = name;
    this.status = status;
  }
}
