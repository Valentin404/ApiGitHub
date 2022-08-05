//@ts-nocheck
enum localName {
    ARR_RESULT = 'ARR_RESULT'

}




export const local_ARR_RESULT = {
get : () : string[] | null => JSON.parse(localStorage.getItem(localName.ARR_RESULT)),
set : function(login : string) {
    const lastData : null | string[] = this.get()
    const newData = lastData  == null ? [login] :  [login, ...lastData]
    localStorage.setItem(localName.ARR_RESULT, JSON.stringify(newData))
}
}
