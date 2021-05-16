import axios from 'axios';

const resource = 'pdf/55000210';

function obtenerCredencial() {
    return axios.get(resource, {responseType: 'blob'});
}

export default obtenerCredencial;