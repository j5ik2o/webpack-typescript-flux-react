/**
 * @author Junichi Kato
 */

/**
 * The view model for `Todo` aggregate.
 */
export class TodoViewModel {
    constructor(public key: string, public text: string, public dateString: string) {
    }
}