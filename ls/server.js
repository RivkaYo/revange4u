
const findRightAction = (obj) => {
    // Select function by methon 
    console.log(obj);
    if (obj.method === 'GET') {
        if (obj.data) {
            return checkUser();
        } else {
            return getRevenges();
        }
    } else if (obj.method === 'PUT') {
        if (obj.data) {
            return addRevenge(obj.data);
        } else {
            return addUser();
        }
    }else if (obj.method === 'DELETE') {
        return deleteRevenge(obj.data);
    }
    else {
        alert("Sorry, request method not found");
    }
}