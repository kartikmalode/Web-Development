function customRender(reactEle,container){

    // const domelement = document.createElement(reactEle.type)
    // domelement.innerHTML = reactEle.children
    // domelement.setAttribute('href',reactEle.props.href)
    // domelement.setAttribute('target',reactEle.props.target)

    // container.appendChild(domelement)


   const domElement = document.createElement(reactEle.type)
    domElement.innerHTML = reactEle.children
    for (const prop in reactEle.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactEle.props[prop])
    }
    container.appendChild(domElement)
}
const reactEle = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click Here'
};

const maincontainer = document.querySelector('#root')

customRender(reactEle,maincontainer)