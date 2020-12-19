import { throttle} from './throttle'
import { debounce} from './debounce'


document.getElementById('myid').addEventListener( "click", debounce(e => {
    console.log('clicked');
}, 2000))



document.getElementById('myid2').addEventListener('click', throttle(() => {
    console.log('you clicked me');
}, 5000));