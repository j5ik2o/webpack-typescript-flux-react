/**
 * @author Junichi Kato
 */

/**
 * Aggregate of DDD to represent Todo.
 */
export class TodoAggregate {
  constructor(public id: string, public text: string, public createAt: Date) {
  }
}
