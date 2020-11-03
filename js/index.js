(function (window, document) {
    'use strict';

    const $toggles = document.querySelectorAll('.toggle'); // 선택자를 찾는 것이기 때문에 클래스 선택자가 붙음
    const $toggleBtn = document.getElementById('toggle-btn'); // 요소를 찾는 것이기 때문에 id 선택자인 #이 필요 없음
    // 토글들과 토글버튼을 검색해둠

    $toggleBtn.addEventListener('click', function(){
        toggleElement();
    });

    window.addEventListener('resize', function(){
        if(window.innerWidth > 1024){
            offElement();
        }
    });

    function toggleElement() {
        [].forEach.call($toggles, function(toggle){
            toggle.classList.toggle('on');
        });    // 반복 후 연결
    }

    function offElement(){
        [].forEach.call($toggles, function(toggle){
            toggle.classList.remove('on');
        });
    }

})(window, document)