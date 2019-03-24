var a = document.getElementsByClassName('issue-assignee')[0]
var b = a.getElementsByClassName('col-sm-10')[0]

const fetchTextArea = () => {
    var a = document.getElementsByClassName('detail-page-description')[0]
    return a.getElementsByTagName('TextArea')[0]

}

const getAssigneeDom = () => {
    var a = document.getElementsByClassName('issue-assignee')[0]
    var b = a.getElementsByClassName('issuable-form-select-holder')[0]        
    var dropdown = b.getElementsByClassName('dropdown')[0]
    var buutton = dropdown.getElementsByTagName('button')[0]
    var span = buutton.getElementsByTagName('span')[0]
    return span;
}
 
const appendAssignee = (text, name) => {
    if(name === 'Assignee' || name ===  'Unassigned') return text.replace(/###Auto Generated Reviewer\sReviewed\sBy.*/gm,'');
    if(text.includes('###Auto Generated Reviewer')) {
        return text.replace(/Reviewed By:.*/,`Reviewed By:${name}`)
    }
    const assigneeName = `\n###Auto Generated Reviewer\nReviewed By:${name}`;
    return text.concat(assigneeName)
}
const append =  () => {
    const dom = fetchTextArea();
    dom.value = appendAssignee(dom.value,getAssigneeDom().innerHTML)
}

b.addEventListener('click',function(){
    setTimeout(append,0)
})
