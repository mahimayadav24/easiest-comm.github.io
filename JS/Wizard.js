function next() {
    var y = document.getElementById('tab1');
    var x = document.getElementById('tab2');
    var l = document.getElementById('img__deco');
    var m = document.getElementById('bg__deco');
    var a = document.getElementById('text__deco');
    var b = document.getElementById('para__deco');
    var s = document.getElementById('bg_color');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
        l.style.background = '#144496';
        a.style.background = '#FFFFFF';
        b.style.background = '#144496';
        b.style.color = 'white';
        s.style.backgroundColor = '#ABCAFF';
        m.style.background = 'rgba(244, 244, 244, 1)';
        a.style.boxShadow = '-8px 8px 20px rgb(46 101 196 / 20%)';
        $("#img__deco").attr("src", "./Assets/basic-tick 1.png");
        l.style.padding = "25px";
    }
    else {
        x.style.display = 'none';
        y.style.display = 'block';
    }
}

function prev() {
    var y = document.getElementById('tab1');
    var x = document.getElementById('tab2');
    var a = document.getElementById('text__deco');
    var b = document.getElementById('para__deco');
    var s = document.getElementById('bg_color');
    var m = document.getElementById('bg__deco');
    var l = document.getElementById('img__deco');
    if (x.style.display === 'block') {
        x.style.display = 'none';
        y.style.display = 'block';
        a.style.background = ' #F4F4F4';
        b.style.background = '#E5E5E5';
        b.style.color = '#B9B9B9';
        m.style.background = '#FFFFFF';
        a.style.boxShadow = 'none';
        $("#img__deco").attr("src", "./Assets/245-edit-document-outline (6) 1.png");
        l.style.padding = "5px";
        s.style.background ='rgb(229, 229, 229)';
        l.style.background ='rgb(171, 202, 255)';
    }
    else {
        x.style.display = 'block';
        y.style.display = 'none';
    }
}

function nextTab() {
    var y = document.getElementById('tab1');
    var x = document.getElementById('tab2');
    var z = document.getElementById('tab3');
    var s = document.getElementById('bg_color');
    var k = document.getElementById('text__div');
    var t = document.getElementById('para__deco2');
    var i = document.getElementById('img__deco5');
    if (z.style.display === 'none') {
        z.style.display = 'block';
        x.style.display = 'none';
        y.style.display = 'none';
        s.style.background = 'rgb(20, 68, 150)';
        k.style.background = 'rgba(255, 255, 255, 1)';
        t.style.background = 'rgba(20, 68, 150, 1)';
        t.style.color = 'rgba(255, 255, 255, 1)';
        i.style.background = 'rgba(171, 202, 255, 1)';
        k.style.boxShadow = '-8px 8px 20px rgb(46 101 196 / 20%)';
        $("#bg_color").attr("src", "./Assets/basic-tick 1.png");
        s.style.padding = "25px";
    }
    else {
        z.style.display = 'none';
        x.style.display = 'block';
        y.style.display = 'block';
    }
}

function prevTab() {
    var x = document.getElementById('tab2');
    var z = document.getElementById('tab3');
    var s = document.getElementById('bg_color');
    var k = document.getElementById('text__div');
    var t = document.getElementById('para__deco2');
    var i = document.getElementById('img__deco5');
    if (z.style.display === 'block') {
        z.style.display = 'none';
        x.style.display = 'block';
        k.style.background = 'rgba(244, 244, 244, 1)';
        t.style.background = 'rgba(229, 229, 229, 1)';
        t.style.color = 'rgba(185, 185, 185, 1)';
        i.style.background = 'rgba(229, 229, 229, 1)';
        k.style.boxShadow = 'none';
        $("#bg_color").attr("src", "./Assets/112-book-morph-outline 1.png");
        s.style.padding = "5px";
        s.style.background = 'rgba(171, 202, 255, 1)';
        $("#img__deco5").attr("src", "./Assets/186-puzzle-outline 1.png");
        i.style.padding = '5px'
    }
    else {
        z.style.display = 'block';
        x.style.display = 'none';
    }
}



function nextTab3() {
    var i = document.getElementById('img__deco5');
    i.style.background = 'rgba(20, 68, 150, 1)';
    $("#img__deco5").attr("src", "./Assets/basic-tick 1.png");
    i.style.padding = '25px'
}



