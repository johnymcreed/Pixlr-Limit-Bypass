setInterval(() => {
    if (localStorage.getItem("user-settings") !== null && JSON.parse(localStorage.getItem("user-settings")).ddid !== undefined) {
        if (JSON.parse(localStorage.getItem("user-settings")).ddid.split(":")[1] == 3) {
            localStorage.clear("user-settings");
            localStorage.setItem("user-settings", "{\"lastNewsCheck\":\"null\", \"ddid\":\"0:0\"}")
            window.location.reload();
        }
    }
})