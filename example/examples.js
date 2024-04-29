
import {HelloWorld ,HelloBlank,Line} from './hello'
// 所有示例都在这里 维护这个数组即可
const examples = [
    {
        title: '默认Viewer',
        class: HelloWorld,
    },
    {
        title: '隐藏默认控件',
        class: HelloBlank,
    },
    {
        title: 'Line',
        class: Line,
    }
]

examples.forEach((item,i) => {
    item.id = i;
})

export default examples;