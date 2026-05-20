export type Founder = {
  key: string;
  nameEn: string;
  nameZh: string;
  styleZh: string; // posthumous / common name
  dynastyEn: string;
  dynastyZh: string;
  founded: string;
  // 0–100 scales
  mercyOfficials: number; // how generously meritorious generals/officials were treated
  mercyKin: number; // how generously brothers / rival heirs were treated
  bodyCount: string; // purged officials, approx
  verdictEn: string;
  verdictZh: string;
  patternEn: string;
  patternZh: string;
  detailEn: string;
  detailZh: string;
  emblem: string; // single hanzi for the seal
  accent: string; // hex
};

export const FOUNDERS: Founder[] = [
  {
    key: "liu-bang",
    nameEn: "Liu Bang",
    nameZh: "刘邦",
    styleZh: "汉高祖",
    dynastyEn: "Western Han",
    dynastyZh: "西汉",
    founded: "202 BCE",
    mercyOfficials: 42,
    mercyKin: 55,
    bodyCount: "the non-Liu kings",
    verdictEn: "Killed the kings, kept the clerks",
    verdictZh: "诛异姓王，存文吏",
    patternEn:
      "Liu Bang did not slaughter his bureaucracy — Xiao He, Cao Shen, Zhang Liang and Chen Ping all survived. He hunted the regional kings of other surnames, the men who held armies and land: Han Xin demoted then executed, Peng Yue minced, Ying Bu driven to revolt, Han Wang Xin and Lu Wan chased into the arms of the Xiongnu.",
    patternZh:
      "刘邦没有屠戮文官集团——萧何、曹参、张良、陈平皆得善终。他猎杀的是手握兵权与封地的异姓诸侯王：韩信先贬后诛，彭越被剁成肉醢，英布被逼反，韩王信与卢绾被逼投匈奴。",
    detailEn:
      "His White Horse Oath bound the empire: none but a Liu may be made king, or all the realm shall strike him down. The threat he feared was not talent but territory — concentrated military power outside the family.",
    detailZh:
      "白马之盟立誓：「非刘氏而王，天下共击之。」他真正恐惧的不是才能，而是疆土——家族之外、集中的军权。",
    emblem: "汉",
    accent: "#bb3c29",
  },
  {
    key: "liu-xiu",
    nameEn: "Liu Xiu",
    nameZh: "刘秀",
    styleZh: "汉光武帝",
    dynastyEn: "Eastern Han",
    dynastyZh: "东汉",
    founded: "25 CE",
    mercyOfficials: 92,
    mercyKin: 88,
    bodyCount: "almost none",
    verdictEn: "The cleanest record — and the luckiest",
    verdictZh: "最干净的记录，也最幸运",
    patternEn:
      "The Twenty-Eight Generals of the Cloud Terrace mostly died rich and honored in their beds. Liu Xiu pensioned off his soldiers and promoted scholar-officials instead of executing anyone. Peaceful succession, no fratricide. By the numbers, the most humane founder in the list.",
    patternZh:
      "云台二十八将多数富贵善终。刘秀「退功臣而进文吏」——以厚赏赎兵权，而非以血洗功臣。和平传位，无骨肉相残。单看数字，他是名单上最仁厚的开国之君。",
    detailEn:
      "But notice the asterisk: his elder brother Liu Yan, the natural rival for the throne, was executed early — by the Gengshi Emperor, not by Liu Xiu. The one rival who might have forced his hand was removed by someone else's hand. His virtue was never put to the cruellest test.",
    detailZh:
      "但要注意那个星号：他的兄长刘縯——天然的皇位竞争者——早早被杀，杀他的是更始帝，而非刘秀本人。那个可能逼他动手的对手，被别人的手除掉了。他的仁德，从未经历最残酷的考验。",
    emblem: "光",
    accent: "#6a8c76",
  },
  {
    key: "li-shimin",
    nameEn: "Li Shimin",
    nameZh: "李世民",
    styleZh: "唐太宗",
    dynastyEn: "Tang",
    dynastyZh: "唐",
    founded: "626 CE",
    mercyOfficials: 90,
    mercyKin: 8,
    bodyCount: "two brothers, ten nephews",
    verdictEn: "Merciful to officials, merciless to blood",
    verdictZh: "宽于功臣，酷于骨肉",
    patternEn:
      "The Twenty-Four of Lingyan Pavilion flourished — Fang Xuanling, Du Ruhui, Wei Zheng who scolded him to his face, Li Jing, Yuchi Jingde. He built a cult of remembered loyalty around his ministers and largely kept faith with them.",
    patternZh:
      "凌烟阁二十四功臣大多荣盛——房玄龄、杜如晦、当面直谏的魏徵、李靖、尉迟敬德。他为臣下建起一座「记忆忠诚」的庙堂，且大体守信。",
    detailEn:
      "And yet the same man, at Xuanwu Gate, killed his elder brother the crown prince and his younger brother, then exterminated all ten of their sons and forced his father off the throne. Mercy and massacre in one biography — sorted entirely by whether you stood between him and the throne.",
    detailZh:
      "可同一个人，在玄武门射杀了身为太子的兄长与弟弟，随即诛尽他们的十个儿子，并逼父退位。仁慈与屠戮同载一传——分野只在于：你是否挡在他与皇位之间。",
    emblem: "唐",
    accent: "#a8894e",
  },
  {
    key: "zhao-kuangyin",
    nameEn: "Zhao Kuangyin",
    nameZh: "赵匡胤",
    styleZh: "宋太祖",
    dynastyEn: "Song",
    dynastyZh: "宋",
    founded: "960 CE",
    mercyOfficials: 85,
    mercyKin: 50,
    bodyCount: "zero, by design",
    verdictEn: "Bought the swords back with wine",
    verdictZh: "杯酒赎回兵权",
    patternEn:
      "At a single banquet — the Cup of Wine that Released Military Power — he persuaded his generals to trade their commands for estates, marriages, and quiet wealth. No executions, no minced bodies. The most elegant solution to the founder's problem anyone ever engineered.",
    patternZh:
      "一场酒宴——「杯酒释兵权」——他便劝得诸将以兵权换田宅、姻亲与安稳富贵。无诛杀，无肉醢。这是有史以来对「开国难题」最优雅的一次工程化解法。",
    detailEn:
      "His own end was less elegant. The night of the Candle Shadows and the Axe Sounds, he died suddenly; the throne passed not to his sons but to his brother. The man who spared everyone else may have been the one who was not spared.",
    detailZh:
      "他自己的结局却不优雅。「烛影斧声」之夜，他暴卒；皇位未传子，而传弟。那个放过了所有人的人，或许正是没被放过的那一个。",
    emblem: "宋",
    accent: "#8aa896",
  },
  {
    key: "zhu-yuanzhang",
    nameEn: "Zhu Yuanzhang",
    nameZh: "朱元璋",
    styleZh: "明太祖",
    dynastyEn: "Ming",
    dynastyZh: "明",
    founded: "1368 CE",
    mercyOfficials: 6,
    mercyKin: 70,
    bodyCount: "tens of thousands",
    verdictEn: "Burned the ladder he climbed",
    verdictZh: "登顶后焚梯",
    patternEn:
      "The Hu Weiyong case and the Lan Yu case were not purges but engineered extinctions — tens of thousands killed across years, the chancellorship abolished forever, the founding nobility erased almost to the man. Li Shanchang, Lan Yu, Fu Youde, Feng Sheng: gone.",
    patternZh:
      "胡惟庸案与蓝玉案不是清洗，而是工程化的灭绝——数年间株连数万，宰相之职就此永废，开国功勋几乎被一扫而空。李善长、蓝玉、傅友德、冯胜：尽诛。",
    detailEn:
      "Tang He read the wind and retired in time; he was among the very few to die in bed. The slaughter had a logic — to clear every strong general from the path of a weak grandson-heir after the crown prince died young. Paranoia, but instrumental paranoia.",
    detailZh:
      "汤和看清风向，及时告老，是极少数得以善终者。这场屠杀自有其逻辑——太子早逝后，为孱弱的皇太孙扫清一切强将。是猜忌，却是工具性的猜忌。",
    emblem: "明",
    accent: "#9c3122",
  },
  {
    key: "mao",
    nameEn: "The Modern Founders",
    nameZh: "现代开国者",
    styleZh: "十大元帅 · 十大将",
    dynastyEn: "People's Republic",
    dynastyZh: "共和国",
    founded: "1949 CE",
    mercyOfficials: 55,
    mercyKin: 50,
    bodyCount: "some fell, most returned",
    verdictEn: "Persecution, then rehabilitation",
    verdictZh: "先遭难，后平反",
    patternEn:
      "The Ten Marshals and Ten Generals met a more ambiguous fate. Some were broken in the Cultural Revolution — Peng Dehuai, He Long died in disgrace; Lin Biao died fleeing. But most were eventually rehabilitated, their honors restored, their names cleared. By the long arc, a comparatively moderate ending.",
    patternZh:
      "十大元帅与十大将的命运更为暧昧。一些人在文革中被摧折——彭德怀、贺龙含冤而逝，林彪出逃殒命。但多数人最终获得平反，恢复名誉。从长程看，这是一个相对温和的结局。",
    detailEn:
      "Moderate against what baseline, though? The chat that seeded this site began here — and only by setting it beside Zhu Yuanzhang's tens of thousands does the word 'moderate' acquire its strange, relative weight.",
    detailZh:
      "可「温和」是相对于什么的基线？孕育此站的那场对话正始于此——唯有把它与朱元璋的数万人头并置，「温和」二字才显出它那奇异而相对的分量。",
    emblem: "共",
    accent: "#cf4a32",
  },
];

export type LoyalCase = {
  nameEn: string;
  nameZh: string;
  lineEn: string;
  lineZh: string;
};

export const SITUATIONAL: LoyalCase[] = [
  {
    nameEn: "Han Xin",
    nameZh: "韩信",
    lineEn:
      "The general who never lost a battle for Liu Bang. His 'rebellion' was thin enough that historians still argue it was manufactured. As they bound him he quoted the proverb back at the throne: the cunning rabbit dead, the hound goes into the pot.",
    lineZh:
      "为刘邦攻无不克的兵仙。他的「谋反」证据单薄到史家至今争论是否是构陷。被缚之际，他把那句古谚还给了庙堂：狡兔死，走狗烹。",
  },
  {
    nameEn: "Han Wang Xin",
    nameZh: "韩王信",
    lineEn:
      "Posted to the frontier, watched with suspicion, negotiating with the Xiongnu only to survive — until the suspicion itself made surrender the only safe move. Not a traitor by temperament. A man cornered into the role.",
    lineZh:
      "被徙边地，备受猜忌，与匈奴往来只为自保——直到那份猜忌本身，使投降成了唯一安全的选择。他并非天性叛逆，而是被逼入了这个角色。",
  },
  {
    nameEn: "Lu Wan",
    nameZh: "卢绾",
    lineEn:
      "Liu Bang's childhood friend, the closest of all. He fled to the Xiongnu weeping, not plotting — certain that staying meant death once the purge reached its inner circle. Friendship was no shield against the logic of consolidation.",
    lineZh:
      "刘邦总角之交，亲信之最。他是哭着逃往匈奴的，不是密谋——他确信，一旦清算触及核心圈，留下即是死。情谊，挡不住集权的逻辑。",
  },
];
