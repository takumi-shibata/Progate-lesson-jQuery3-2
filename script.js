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


  // scrollTopメソッド: $('html, body').scrollTop(値);  ページ最上部から値pxの位置に移動することができる。最上部は「０」
  // $('html, body').scrollTop(0);

  // アニメーションを用いたスクロール
  $('#top-btn').click(function() {
  	$('html, body').animate({
  		'scrollTop':0  // ※0や変数は「''」で囲まない！
  	},500);
  });


  // offsetメソッド: ページの上端からの距離とページの左端からの距離が連想配列の形で返ってくる。offset().topとすると、ページの上端からの距離が取得できる。
  $('header a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop':position
    },500);
  });
});