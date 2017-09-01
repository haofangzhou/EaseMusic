$(function(){
    $.get('http://localhost/post/word.php').then(function(object){
        console.log("lyric=="+object)
        let aaa =JSON.parse(object);
        let lyric=aaa.lrc.lyric;
        let arry=lyric.split('\n')
        // let regex=/^\[(.+)\](.+)/g
        let regex=/^\[(.+)\](.+)$/
        arry=arry.map(function(string,index){
            // let matches=regex.exec(string)
             let matches=string.match(regex)
            if(matches){
                return {time:matches[1],words:matches[2]}
            }
          
        })
        let $lyric =$('.lyric')
        arry.map(function(object){
            if(!object) {return}
            let $p=$('<p/>')
            $p.attr('data-time',object.time).text(object.words)
            $p.appendTo($lyric.children('.lines'))
        })
    })

    let audio =document.createElement('audio')
    audio.src='http://dl.stream.qqmusic.qq.com/C4000027zPYs3A9fyb.m4a?fromtag=38&vkey=AEE597A012F34B51A237B0F922C5A00863C2042F970A949D2A36C62FA535C772B34F487095E6F72B8343E2B86E921F6318F7A2B62370C2D9&guid=7490034320'
    audio.oncanplay = function(){
    audio.play();
        $('.disc-container').addClass('playing')
    }
    $('.pause').on('click',function(){
        audio.pause()
        $('.disc-container').removeClass('playing')
    })
    $('.play').on('click',function(){
        audio.play()
        $('.disc-container').addClass('playing')
    })
})