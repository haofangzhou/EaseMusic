$(function(){
    $.get('http://localhost/post/word.php').then(function(object){
        console.log("lyric=="+object)
        let aaa =JSON.parse(object);
        let lyric=aaa.lrc.lyric;
        console.log("lyric=="+aaa.lrc.lyric)
        let arry=lyric.split('\n')
        // let regex=/^\[(.+)\](.+)/g
        let regex=/^\[(.+)\](.+)$/
        arry=arry.map(function(string,index){
            // let matches=regex.exec(string)
             let matches=string.match(regex)
             console.log("333333="+matches);
            if(matches){
                return {time:matches[1],words:matches[2]}
            }
          
        })
        let $lyric =$('.lyric')
        arry.map(function(object){
            if(!object) {return}
            console.log("sss="+object.time);
            let $p=$('<p/>')
            $p.attr('data-time',object.time).text(object.words)
            $p.appendTo($lyric.children('.lines'))
        })
    })

    let audio =document.createElement('audio')
    audio.src='http://m10.music.126.net/20170831152256/3dbd78088fa4beaa3b7934bc0675bcca/ymusic/2087/0e9a/89c5/3a7fe466f11c872349eb792e454f77c6.mp3'
    audio.oncanplay = function(){
        audio.play();
        $('.disc-container').addClass('playing')
    }



})