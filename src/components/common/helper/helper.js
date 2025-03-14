export default function addPropsObj(currentProp, targetProp, array, props) {
    return array.map(elem => elem[currentProp] === targetProp ? { ...elem, ...props} : elem );
}