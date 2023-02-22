var sidebarOpen = false;
var sidebar = document.getElementByI("sidebar");
function openSidebar(){
    if(!sidebarOpen){
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen=true;
    }
}

function closeSidebar(){
    if(sidebarOpen){
        sidebar.classList.remove("Sidebar-responsive");
        sidebarOpen=false;
    }
}