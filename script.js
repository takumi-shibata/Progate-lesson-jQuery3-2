$(function() {
  // animateメソッド: アニメーションの付与、$('セレクタ').animate({'プロパティ':'値'},第2引数);
  // ※第2引数でアニメーションの時間を設定することができる。時間はミリ秒で指定するか、'slow'や'fast'といった文字列で指定することができる。
  $('.social-icon').hover(
    function() {
      $(this).animate({
        'font-size':'30px'
      },300);
    },
    function() {
      $(this).animate({
        'font-size':'24px'
      },300);
    }
  );
});