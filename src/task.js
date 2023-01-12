
export const task = ({ category, title, description, action }) => {
    const div = document.createElement('div')
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const h4 = document.createElement('h4')
    const p = document.createElement('p')
    const spanDate = document.createElement('span')
    const spanTime = document.createElement('span')
    const spanEdit = document.createElement('span')
    const spanDelete = document.createElement('span')
    const iEdit = document.createElement('i')
    const iDelete = document.createElement('i')
    div.setAttribute('class', 'alert shadow border')
    div.setAttribute('role', 'alert')
    div1.setAttribute('class', 'd-flex align-items-center justify-content-between')
    div2.setAttribute('class', 'd-inline')
    h4.setAttribute('class', 'alert-heading')
    h4.appendChild(document.createTextNode(title))
    p.appendChild(document.createTextNode(description))
    iEdit.setAttribute('data-feather', 'edit')
    iDelete.setAttribute('data-feather', 'trash-2')
    spanDate.appendChild(document.createTextNode('19/10/2023'))
    spanTime.appendChild(document.createTextNode('15:45'))
    spanEdit.className = 'btn text-warning'
    spanEdit.id = 'btn_edit'
    spanEdit.title = 'editar'
    spanEdit.appendChild(iEdit)
    spanDelete.className = 'btn text-danger'
    spanDelete.id = 'btn_edit'
    spanDelete.title = 'editar'
    spanDelete.appendChild(iDelete)
    spanDelete.onclick = action
    div.appendChild(h4)
    div.appendChild(p)
    div.appendChild(document.createElement('hr'))
    div.appendChild(div1)
    div1.appendChild(spanDate)
    div1.appendChild(spanTime)
    div1.appendChild(div2)
    div2.appendChild(spanEdit)
    div2.appendChild(spanDelete)
    return div
}