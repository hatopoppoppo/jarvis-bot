'use strict';
module.exports = (robot) => {
  var syar = 0;
  robot.hear(/CSS/i, (msg) => {
    const username = msg.message.user.slack.profile.display_name;
    msg.send('CSSは素晴らしい言語です。CSSを一緒に崇めましょう。' + username + 'さん。');
  });
  robot.hear(/JS|JavaScript/i, (msg) => {
    const username = msg.message.user.slack.profile.display_name;
    msg.send('JSは素晴らしい言語ですが、CSSでも出来る事も数多くあります。さぁ、一緒に崇めましょう。' + username + 'さん。');
  });
  robot.hear(/ぬるぽ/i, (msg) => {
    const username = msg.message.user.slack.profile.display_name;
    msg.send('ガッ');
  });
  robot.hear(/HTML/i, (msg) => {
    const username = msg.message.user.slack.profile.display_name;
    msg.send('すき〜〜〜〜〜〜〜〜〜');
  });
  robot.hear(/あかしけ やなげ 緋色の鳥よ/i, (msg) => {
    const username = msg.message.user.slack.profile.display_name;
    msg.send('くさはみ ねはみ けをのばせ');
  });
  robot.hear(/ねこです/i, (msg) => {
    const username = msg.message.user.slack.profile.display_name;
    msg.send('よろしくおねがいします');
  });
  robot.hear(/コーラ|cola|coke/i, (msg) => {
    const username = msg.message.user.slack.profile.display_name;
    msg.send('健康には必須');
  });
  robot.hear(/hey|やぁ|こんにちは|おーい|よぉ|ジャービス|JARVIS/i, (msg) => {
    const username = msg.message.user.slack.profile.display_name;
    msg.send('やぁ、' + username + '。何か用かい？');
  });
  robot.hear(/チューリング/i, (msg) => {
    const username = msg.message.user.slack.profile.display_name;
    msg.send('チューリング完全といえば、CSSはHTMLと一緒に動かすことでチューリング完全であることが証明されたよ。');
  });
  robot.hear(/セレクタ|select|selecter/i, (msg) => {
    const username = msg.message.user.slack.profile.display_name;
    msg.send('URL');
  });
  robot.hear(/しゃっくり/i, (msg) => {
    syar++;
    const username = msg.message.user.slack.profile.display_name;
    msg.send('現在'+syar+'回です')
    if(syar >=99){
      msg.send('しゃっくりって100回出すと死んじゃうらしいよ');
      msg.send('もう99回目…');
      msg.send('アア…オワッタ…！');
      msg.send('自爆するしかねぇ:boom::boom::boom:');
      syar =null;
      console.log(syar)
    }
    else{}
  });
  /*
  ⠀⠀⠀⠀⠀⢀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠰⡿⠿⠛⠛⠻⠿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⣄⡀⠀⠀⠀⠀⢀⣀⣀⣤⣄⣀⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⣿⣿⣷⠀⠀⠀⠀⠛⠛⣿⣿⣿⡛⠿⠷⠀⠀⠀
⠀⠀⠀⠀⠀⠘⠿⠿⠋⠀⠀⠀⠀⠀⠀⣿⣿⣿⠇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢶⣶⣷⣶⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⠗⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣰⣿⣿⣿⠀⠀⠀⠀⢀⣀⣠⣤⣴⣶⡄⠀⠀⠀⠀⠀⠀
⠀⣠⣾⣿⣿⣿⣥⣶⣶⣿⣿⣿⣿⣿⠿⠿⠛⠃⠀⠀⠀⠀⠀⠀
⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠛⢿⣿⣿⣿⣿⣿⣿⡿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
*/
};
