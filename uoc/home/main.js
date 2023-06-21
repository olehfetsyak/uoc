window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    console.log(scrolled);

    if (scrolled >= 15) {
        document.getElementById('nav').style.boxShadow = '0px 0px 10px 10px black';
    } else {
        document.getElementById('nav').style.boxShadow = '0px 0px 30px 30px black';
    };
});

window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    console.log(scrolled);

    if (scrolled >= 530 && scrolled <= 4450) {
        document.getElementById('linkForIndex').style.position = 'fixed';
        document.getElementById('linkForIndex').style.top = '12vh';
        document.getElementById('linkForIndex').style.bottom = '0vh';
        document.getElementById('linkForIndex').style.overflow = 'hidden';
        document.getElementById('linkForIndex').style.overflowY = 'scroll';
    } else if (scrolled >= 4450) {
        document.getElementById('linkForIndex').style.position = 'fixed';
        document.getElementById('linkForIndex').style.top = '-13vh';
        document.getElementById('linkForIndex').style.overflow = 'hidden';
        document.getElementById('linkForIndex').style.overflowY = 'scroll';
    } else {
        document.getElementById('linkForIndex').style.position = 'absolute';
        document.getElementById('linkForIndex').style.top = '75vh';
        document.getElementById('linkForIndex').style.overflow = 'none';
        document.getElementById('linkForIndex').style.overflowY = 'none';
    };
});

function togglePopup() {
    document.getElementById('popup1').classList.toggle('active');
}
function togglePopup2() {
    document.getElementById('popup2').classList.toggle('active');
}
function togglePopup3() {
    document.getElementById('popup3').classList.toggle('active');
}
function togglePopup4() {
    document.getElementById('popup4').classList.toggle('active');
}
function togglePopup5() {
    document.getElementById('popup5').classList.toggle('active');
}
function togglePopup6() {
    document.getElementById('popup6').classList.toggle('active');
}
function togglePopup7() {
    document.getElementById('popup7').classList.toggle('active');
}
function togglePopup8() {
    document.getElementById('popup8').classList.toggle('active');
}
function togglePopup9() {
    document.getElementById('popup9').classList.toggle('active');
}
function togglePopup10() {
    document.getElementById('popup10').classList.toggle('active');
}
function togglePopup11() {
    document.getElementById('popup11').classList.toggle('active');
}
function togglePopup12() {
    document.getElementById('popup12').classList.toggle('active');
}
function togglePopup13() {
    document.getElementById('popup13').classList.toggle('active');
}
function togglePopup14() {
    document.getElementById('popup14').classList.toggle('active');
}
function togglePopup15() {
    document.getElementById('popup15').classList.toggle('active');
}
function togglePopup16() {
    document.getElementById('popup16').classList.toggle('active');
}
function togglePopup17() {
    document.getElementById('popup17').classList.toggle('active');
}
function togglePopup18() {
    document.getElementById('popup18').classList.toggle('active');
}
function togglePopup19() {
    document.getElementById('popup19').classList.toggle('active');
}
function togglePopup20() {
    document.getElementById('popup20').classList.toggle('active');
}
function togglePopup21() {
    document.getElementById('popup21').classList.toggle('active');
}
function togglePopup22() {
    document.getElementById('popup22').classList.toggle('active');
}