
const findRightAction = (obj) => {
    //by methon select option. 
    console.log(obj);
    if (obj.method === 'GET') {

    } else if (obj.method === 'POST') {

    } else if (obj.method === 'PUT') {
        addRevenge();
    }else if (obj.method === 'DELETE') {
        deleteRevenge(obj.data);
    }
}





