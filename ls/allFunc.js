const deleteRevenge = (event) => {
    console.log("5");
    deletedId = event.target.id;
    console.log('event.target.id: ', event.target.id);
    document.querySelectorAll('.singleRevenge').forEach(div => {
        
        if (div.id === event.target.id) {
            //remove from display
            document.getElementById("revengeList").removeChild(div);
            //remove from ls
        
            console.log('event.target.id: ', event.target.id);
            console.log('revenge.indexOf(event.target.id): ', revengeList.indexOf(event.target));
            const checkStay = () => {return !revengeList.indexOf(event.target) === event.target};
            updatedRevengeList = JSON.stringify(revengeList.filter(checkStay));
            localStorage.setItem("revenge", updatedRevengeList);
        };
    });
};
