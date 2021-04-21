const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', async message => {
  if (message.content === '$샘플 2세대 목록') {
  const embed = new Discord.MessageEmbed()
  .setTitle('지금까지 2세대 샘플 봇에 등재 된 포켓몬이에요!')
  .setDescription('폴리곤2')
  .setColor('#F8E77F') 
  .setFooter(`샘플은 매일매일 업데이트 예정!`)
  message.channel.send(embed)
  }
}) 

client.on('message', async message => {
  if (message.content === '$샘플 폴리곤2') {
  const embed = new Discord.MessageEmbed()
  .setTitle('현재 `폴리곤2` 샘플은 1개 있어요!')
  .setDescription('**$샘플 폴리곤2 (번호)를 써주시면 볼 수 있습니다!**\n1. 진화의휘석 폴리곤2') 
  .setColor('#E3DDCB') 
  .setFooter(`EX) $샘플 이상해씨 1`)
  message.channel.send(embed)
  }
}) 

client.on('message', async message => {
  if (message.content === '$샘플 폴리곤2 1') {
  const embed = new Discord.MessageEmbed()
  .setTitle('진화의휘석 폴리곤2 샘플 1')
  .setDescription('**포켓몬**: 폴리곤\n**특성**: 다운로드\n**성격**: 조심\n**도구**: 진화의휘석\n**노력치**: H 252 | B 252\n**개체값**: A, S 제외 4V\n**기술**: 10만볼트/트릭룸/트라이어택/사이코키네시스\n\n**추가 설명**: 폴리곤2 h, b만 넣어도 무릎차기 에 확2타 (생명의구슬 이어도)\n**같이 쓰면 좋은 포켓몬**: 차곡차곡') 
  .setColor('#E3DDCB') 
  .setFooter(`샘플에 관한 질문은 질문 채널에서 해주시면 감사하겠습니다.`)
  embed.setImage('https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0233_000_uk_n_00000000_f_n.png')
  message.channel.send(embed)
  }
})

client.login(token);