import {get} from '@/services/ApiService';

const resource = 'giros';
function getGiros() {
    return get<Giro>(resource).then(res => res);
}

export {getGiros};