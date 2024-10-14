
const findRightAction = (obj) => {
    //by methon select option. 
    console.log(obj);
    if (obj.method === 'GET') {
        if (obj.data) {
            checkUser();
        } else {
            displayRevenges();
        }
    } else if (obj.method === 'PUT') {
        if (obj.data) {
            addRevenge();
        } else {
            addUser();
        }
    }else if (obj.method === 'DELETE') {
        deleteRevenge(obj.data);
    }
    else {
        alert("Sorry, request method not found");
    }
}





