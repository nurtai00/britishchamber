//quick_message
function viewPopUp(){
    document.getElementById("msg").style.display = "block";
}
function closePopUp(){
    document.getElementById("msg").style.display = "none";
    document.getElementById("north-pp").style.display = "none";
    document.getElementById("south-pp").style.display = "none";
    document.getElementById("center-pp").style.display = "none";
    document.getElementById("east-pp").style.display = "none";
    document.getElementById("west-pp").style.display = "none";
}
function successPopUp(){
    document.getElementById("scs-pp").style.display = "block";
    document.getElementById("scs-pp").style.position = "fixed";
}

function closeSuccessPopUp() {
    document.getElementById("scs-pp").style.display = "none";
    document.getElementById("msg").style.display = "none";
}

//map popup
function viewNorthPopUp(){
    document.getElementById("north-pp").style.display = "block";
}

function viewSouthPopUp(){
    document.getElementById("south-pp").style.display = "block";
}

function viewCenterPopUp(){
    document.getElementById("center-pp").style.display = "block";
}

function viewEastPopUp(){
    document.getElementById("east-pp").style.display = "block";
}

function viewWestPopUp(){
    document.getElementById("west-pp").style.display = "block";
}

//about_organization
function viewCommittee(){
    document.getElementById("committee-tab").style.backgroundColor = "#DC5555";
    document.getElementById("committee-tab").style.color = "white";

    document.getElementById("honor-tab").style.backgroundColor = "white";
    document.getElementById("honor-tab").style.color = "black";

    document.getElementById("team-tab").style.backgroundColor = "white";
    document.getElementById("team-tab").style.color = "black";
}

function viewHonor(){
    document.getElementById("honor-tab").style.backgroundColor = "#00AFCA";
    document.getElementById("honor-tab").style.color = "white";

    document.getElementById("team-tab").style.backgroundColor = "white";
    document.getElementById("team-tab").style.color = "black";

    document.getElementById("committee-tab").style.backgroundColor = "white";
    document.getElementById("committee-tab").style.color = "black";
}

function viewTeam(){
    document.getElementById("team-tab").style.backgroundColor = "black";
    document.getElementById("team-tab").style.color = "white";

    document.getElementById("honor-tab").style.backgroundColor = "white";
    document.getElementById("honor-tab").style.color = "black";

    document.getElementById("committee-tab").style.backgroundColor = "white";
    document.getElementById("committee-tab").style.color = "black";
}

function openCommittee1left(){
    document.getElementById("committee1-left").style.display = "block";
    document.getElementById("committee2-left").style.display = "none";
    document.getElementById("committee3-left").style.display = "none";
    document.getElementById("committee4-left").style.display = "none";
    document.getElementById("committee5-left").style.display = "none";
    document.getElementById("committee6-left").style.display = "none";
    document.getElementById("committee1").style.opacity = "100%";
    document.getElementById("committee2").style.opacity = "20%";
    document.getElementById("committee3").style.opacity = "20%";
    document.getElementById("committee4").style.opacity = "20%";
    document.getElementById("committee5").style.opacity = "20%";
    document.getElementById("committee6").style.opacity = "20%";


}

function openCommittee2left(){
    document.getElementById("committee1-left").style.display = "none";
    document.getElementById("committee2-left").style.display = "block";
    document.getElementById("committee3-left").style.display = "none";
    document.getElementById("committee4-left").style.display = "none";
    document.getElementById("committee5-left").style.display = "none";
    document.getElementById("committee6-left").style.display = "none";
    document.getElementById("committee2").style.opacity = "100%";
    document.getElementById("committee1").style.opacity = "20%";
    document.getElementById("committee3").style.opacity = "20%";
    document.getElementById("committee4").style.opacity = "20%";
    document.getElementById("committee5").style.opacity = "20%";
    document.getElementById("committee6").style.opacity = "20%";
}

function openCommittee3left(){
    document.getElementById("committee1-left").style.display = "none";
    document.getElementById("committee2-left").style.display = "none";
    document.getElementById("committee3-left").style.display = "block";
    document.getElementById("committee4-left").style.display = "none";
    document.getElementById("committee5-left").style.display = "none";
    document.getElementById("committee6-left").style.display = "none";
    document.getElementById("committee3").style.opacity = "100%";
    document.getElementById("committee1").style.opacity = "20%";
    document.getElementById("committee2").style.opacity = "20%";
    document.getElementById("committee4").style.opacity = "20%";
    document.getElementById("committee5").style.opacity = "20%";
    document.getElementById("committee6").style.opacity = "20%";
}

function openCommittee4left(){
    document.getElementById("committee1-left").style.display = "none";
    document.getElementById("committee2-left").style.display = "none";
    document.getElementById("committee3-left").style.display = "none";
    document.getElementById("committee4-left").style.display = "block";
    document.getElementById("committee5-left").style.display = "none";
    document.getElementById("committee6-left").style.display = "none";
    document.getElementById("committee4").style.opacity = "100%";
    document.getElementById("committee1").style.opacity = "20%";
    document.getElementById("committee2").style.opacity = "20%";
    document.getElementById("committee3").style.opacity = "20%";
    document.getElementById("committee5").style.opacity = "20%";
    document.getElementById("committee6").style.opacity = "20%";
}

function openCommittee5left(){
    document.getElementById("committee1-left").style.display = "none";
    document.getElementById("committee2-left").style.display = "none";
    document.getElementById("committee3-left").style.display = "none";
    document.getElementById("committee4-left").style.display = "none";
    document.getElementById("committee5-left").style.display = "block";
    document.getElementById("committee6-left").style.display = "none";
    document.getElementById("committee5").style.opacity = "100%";
    document.getElementById("committee1").style.opacity = "20%";
    document.getElementById("committee2").style.opacity = "20%";
    document.getElementById("committee3").style.opacity = "20%";
    document.getElementById("committee4").style.opacity = "20%";
    document.getElementById("committee6").style.opacity = "20%";
}

function openCommittee6left(){
    document.getElementById("committee1-left").style.display = "none";
    document.getElementById("committee2-left").style.display = "none";
    document.getElementById("committee3-left").style.display = "none";
    document.getElementById("committee4-left").style.display = "none";
    document.getElementById("committee5-left").style.display = "none";
    document.getElementById("committee6-left").style.display = "block";
    document.getElementById("committee6").style.opacity = "100%";
    document.getElementById("committee1").style.opacity = "20%";
    document.getElementById("committee2").style.opacity = "20%";
    document.getElementById("committee3").style.opacity = "20%";
    document.getElementById("committee4").style.opacity = "20%";
    document.getElementById("committee5").style.opacity = "20%";
}

function openHonor1left(){
    document.getElementById("honor1-left").style.display = "block";
    document.getElementById("honor2-left").style.display = "none";
    document.getElementById("honor3-left").style.display = "none";
    document.getElementById("honor4-left").style.display = "none";
    document.getElementById("honor1").style.opacity = "100%";
    document.getElementById("honor2").style.opacity = "20%";
    document.getElementById("honor3").style.opacity = "20%";
    document.getElementById("honor4").style.opacity = "20%";
}

function openHonor2left(){
    document.getElementById("honor1-left").style.display = "none";
    document.getElementById("honor2-left").style.display = "block";
    document.getElementById("honor3-left").style.display = "none";
    document.getElementById("honor4-left").style.display = "none";
    document.getElementById("honor2").style.opacity = "100%";
    document.getElementById("honor1").style.opacity = "20%";
    document.getElementById("honor3").style.opacity = "20%";
    document.getElementById("honor4").style.opacity = "20%";
}

function openHonor3left(){
    document.getElementById("honor1-left").style.display = "none";
    document.getElementById("honor2-left").style.display = "none";
    document.getElementById("honor3-left").style.display = "block";
    document.getElementById("honor4-left").style.display = "none";
    document.getElementById("honor3").style.opacity = "100%";
    document.getElementById("honor1").style.opacity = "20%";
    document.getElementById("honor2").style.opacity = "20%";
    document.getElementById("honor4").style.opacity = "20%";
}

function openHonor4left(){
    document.getElementById("honor1-left").style.display = "none";
    document.getElementById("honor2-left").style.display = "none";
    document.getElementById("honor3-left").style.display = "none";
    document.getElementById("honor4-left").style.display = "block";
    document.getElementById("honor4").style.opacity = "100%";
    document.getElementById("honor1").style.opacity = "20%";
    document.getElementById("honor2").style.opacity = "20%";
    document.getElementById("honor3").style.opacity = "20%";
}


//business
function viewOil(){
    document.getElementById("oil-card").style.display = "block";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "block";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "none";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "block";
};

function viewMining(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "block";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "block";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "none";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "block";


};

function viewFinance(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "block";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "block";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "none";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "block";
};

function viewInfra(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "block";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "block";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "none";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "block";
};

function viewTech(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "block";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "block";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "none";
    document.getElementById("agri").style.display = "block";
};

function viewAgri(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "block";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "block";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "none";
};

function closeOil(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "block";
};

function closeMining(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "block";
};

function closeFinance(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "block";
};

function closeInfra(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "block";
};

function closeTech(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "block";
};

function closeAgri(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "block";
};



