import type { Locale } from "@/contexts/LanguageContext";

export type MindBodyArticle = {
  number: number;
  slug: string;
  title: Record<Locale, string>;
  body: Record<Locale, string[]>;
  references: string[];
};

export const mindBodyIntroduction: Record<Locale, string> = {
  "zh": "在一個重視科學實證的現代社會，我們往往習慣把身體與心靈視為兩種彼此獨立的存在。〈心與身〉系列嘗試從另一個角度出發，以身心一體的視角，探索身體、心靈、意象與象徵之間的關係，以及一個人如何在創傷之中經歷修復與心靈的成長。",
  "en": "In a modern world that places strong emphasis on scientific evidence, we have become accustomed to viewing the body and the mind as two separate and independent entities. The Mind & Body series explores another perspective—one that sees body and mind as an integrated whole. Through the relationship between body, psyche, image and symbol, the series considers how psychological growth and healing from trauma may unfold."
} as const;

export const mindBodyImage = "https://personalbrnd-eozfgujc.manus.space/manus-storage/mind-body-concept-03_e3cc0c20.jpg";

export const mindBodyArticles: MindBodyArticle[] = [
  {
    "number": 1,
    "slug": "mind-body-01",
    "title": {
      "zh": "心智回到身體的時代",
      "en": "Mind and body (1): The Era of Psychical Embodiment"
    },
    "body": {
      "zh": [
        "這一年參加了倫敦的分析心理學學會（SAP）每月一次的課程，屬於著重歷程與經驗的小組，整年的主題都會談到「身體」，這是後榮格的重要課題。",
        "從哲學史的發展，我們也可以看到梅洛龐蒂（Maurice Merleau-Ponty）、福柯(Michel Foucault)、德希達(Jacques Derrida)的近代哲學家對笛卡兒式身心二元思想的深度批判。",
        "可是，什麼是身心二元？什麼是回到身體？",
        "簡單來說，身心二元，就是認為身體和心靈是截然不同的觀點。這種觀點的洐生，從古希臘時期開始重視精神生活與人類理性的哲學開始漸漸滲透，到文藝復興時期笛卡兒的「我思故我在」，思考已經完全脫離肉身，成為獨立的存在，也可以說是凌駕了身體，等同「我」的存在。身體卻被淪為只是物質，純粹尋求舒適或有待馴化的慾望體。",
        "笛卡兒式的思想大爆發，它最大的貢獻，可能是為科學打下基礎。現代的科學、醫學、心理學等也是循著這個二元觀念的基礎下發展起來的，是整個現代社會普遍認同的原則。因此，也造就了現代社會的物質發展蓬勃，物質主義、實用主義等。到了後現代，一些人又開始意識到物質的豐富，並沒有帶來真正的幸福，於是著重靈性與精神。身心靈社群的興起，便是傳統信仰漸漸沒落，取而代之的去中心化、去權威化的精神層面的尋求。",
        "社會在身心兩極之中來回擺盪，尋找平衡。然而，仍然是二元分裂的狀態。",
        "把身心視為一個整體，是兩極之間的第三條出路。後榮格主題談到的身體，不同於現代醫學只視肉體為一具沒有思想意志的有機化學合成物；而是把身體視為有靈的存在，合一的存在。這與梅洛龐蒂提出的身體是主體的基礎，感知的中心的思想相合。",
        "精神科醫師兼榮格分析師Jean Knox有一篇文章提出了有趣的觀點，提到身心二元分化，是一種次級前運動皮質區（Secondary premotor cortical area）與初級運動皮質（Primary motor cortex）斷連抑制的效果，屬於人類發展的一部份。Jean Knox認為基於這種斷連，人才能產生意象圖式（image schema）（或稱為原型意象），允許沒有行動的想像發生，也是抽象思維的基礎。在我看來，她側面印證了身心本是一元整體的論述，也展示了二元分化為人類進程的視角。",
        "從劇烈的兩極擺盪中得到安穩，我們需要向前多去一步，回歸身體我們就可以尋回靈魂。"
      ],
      "en": [
        "This year, I joined year-long course at Society of Analytical Psychology (SAP), a monthly experiential group whose annual theme is “the body”. This topic is crucial to post-Jungian thought.",
        "In the history of philosophy, contemporary thinkers such as Maurice Merleau-Ponty, Michel Foucault, and Jacques Derrida have profoundly criticized on Cartesian mind-body dualism.",
        "However, what exactly is mind-body dualism? And, what does it mean to return the psyche to the body?",
        "Simply speaking, mind-body dualism refers to the idea that mind and body are fundamentally separate. This view originated since ancient Greek where philosophies emphasised the life of the mind and human rationality. By the time of the Renaissance, Rene Descartes’ famous statement, ‘I think, therefore I am’, had elevated thinking beyond the body positioning the thinking as the core of the self. In contrast, the body became reduced to mere matter, a vessel for comfort or an object to be tamed.",
        "Cartesian dualism became foundational for the development of modern science. Contemporary medicine and psychology grew out of this worldview, which continue to shape modern society. It also contributed to rapid material development materialism, and pragmatism. Yet in postmodern era, people began to realise that material abundance does not necessarily bring happiness, leading to renewed interest in spirituality and mind-body-spirit practices. As traditional religions declined, more decentralised, non-authoritarian forms of spiritual seeking emerged.",
        "Our society continues to swing between the poles of mind and body, yet remains in the state of splitting.",
        "A third path is to view body as an integrated whole. In the post-Jungian perspective, the body is not a mindless, purely biological organism but an ensouled, unified presence. This resonates with Merleau-Ponty's idea of the body as the foundation of subjectivity and the center of perception.",
        "Psychiatrist and Jungian analyst Jean Knox offered an intriguing contribution. She suggested that the emergence of mind-body dualism may be linked to the developmental de-coupling (inhibition) between the secondary premotor cortex and the primary motor cortex, that this is a part of development of human brain. This de-coupling allows the formation of image schemas (or called archetypal images), permitting imagination to occur without action taking. This capacity also forms the basis of abstract thought. In this sense, Knox’s view both implies an original unity of mind and body and shows how their differentiation is part of human development.",
        "To find steadiness amidst these oscillations, we need to take another step forward: to return the psyche to the body, and in doing so, rediscover the soul."
      ]
    },
    "references": [
      "Knox, J. (2009). Mirror neurons and embodied simulation in the development of archetypes and self-agency. Journal of Analytical Psychology, 54(3), 307–323. https://doi.org/10.1111/j.1468-5922.2009.01782.x"
    ]
  },
  {
    "number": 2,
    "slug": "mind-body-02",
    "title": {
      "zh": "心靈和免疫系統",
      "en": "Mind and body (2)- The Psyche and the Immune System"
    },
    "body": {
      "zh": [
        "Gerhardt S在〈Tying not to feel：The link between early emotional regulation and the immune system〉 中解釋了情緒與發炎反應和免疫系統相互影響。",
        "假如忿怒與不安習慣性地沒有透過建設性的途徑來表達，慢性的壓力使腎上腺皮質分泌的皮質醇（一種壓力荷爾蒙）停留在系統當中，最終導致身體對皮質醇反映下調，就如我們長期嗜濃味的食物，味蕾便會變得遲鈍。皮質醇能抑制免疫系統，減低炎症反應。類固醇藥物就是模仿皮質醇來治療炎症或自體免疫疾病。然後，身體承受長期的發炎。而長期發炎狀態的身體，是心臟病和癌症等嚴重疾病的溫床。",
        "有研究顯示(Slavich et al. 2010)受到他人拒絕和排擠，例如遭到欺凌，也會增加身體炎症反應。人越是早年承受社會性壓力，將來的炎症反應也越大（Miller et al. 2011)。",
        "自尊感脆弱的父母，更容易是嚴厲且貶低孩子的父母，欺凌也往往發生在家庭中，除了承受心理創傷，免疫力也受影響。長大後，對於各種疾病的侵襲也顯得更脆弱。相反，在愛與支持環境長大的孩子，免疫力會提升。（Carroll et al. 2013)",
        "「太強勢」或「太友好」都是危險的，那會阻斷我們天然的情感流向。「太強勢」可能經常產生不滿和忿怒，而對悲傷反感；相反，「太友好」的人可能時常經驗恐懼或傷感，對忿怒抗拒。情緒是我們重要的訊息系統，以生物化學訊號（不同的荷爾蒙分泌）來幫助我們了解環境和自身的狀態。對情感習慣性的忽視、壓抑或麻木，會造成免疫系統的紊亂，疾病由此而生，心靈也會陷入迷失。"
      ],
      "en": [
        "In her paper, Tying not to feel：The Links Between Early emotional Regulation and the Immune System, Gerhardt explains how emotions, inflammation, and immune system are interrelated.",
        "If anger or distress are habitually suppressed without being expressed or processed in constructive ways, prolonged stress may cause cortisol, which a stress hormone secreted by the adrenal cortex, to remain elevated the system. Over time, this can lead to a ‘down-regulating’ of the body’s sensitivity to cortisol. Just as our taste buds become dulled after long-term exposure to strongly flavoured foods. Cortisol normally inhibits the immune system, turning off the body’s inflammation response. Steroid, for example, mimic the action of cortisol treating body’s inflammation and autoimmune diseases. When this regulatory mechansim is disrupted, a state of chronic inflammation ensues, providing a fertile ground for serious illnesses such as heart disease and cancer (Miller et al. 2011).",
        "Research has shown that the experiences of social rejection, such as bullying, also increases inflammatory reaction in the body (Slavich et al. 2010). When people more early exposured to psychosocial stress, the more exaggerated their future inflammatory response （Miller et al. 2011).",
        "Adults whose own self-esteem is fragile are more likely the harsh parents, devaluing their child. Therefore, bullying can also be found in family environments. In addition to experiencing psychological trauma, their immune system is also affected. When such children grow up, they are likely to be more vulnerable to a wide range of diseases. Conversely, a child who experiences loving and supportive parenting has a more robust immune system (Carroll et al. 2013).",
        "Being too ‘strong’ or too ‘nice’ can be dangerous, as both cut off the natural flow of feelings. For someone who is too ‘strong’ would always feel angry and resentful, rejecting sadness. However, individual is too ‘nice’ may be prone to fear and sorrow, avoiding anger. Emotions function as essential signalling system, conveyed through biochemical processes such as hormonal activity, helping us make sense of our environment and our inner states. Habitual ignored, blocked, or numbing of emotions can disrupt the immune regulation, leading to illness and causing a loss of psychological and the spiritual orientation."
      ]
    },
    "references": [
      "Gerhardt, S. (2015). Why love matters: How affection shapes a baby’s brain (2nd ed.). Routledge.",
      "Carroll, J. E., Gruenewald, T. L., Taylor, S. E., Janicki-Deverts, D., Matthews, K. A., & Seeman, T. E. (2013). Childhood abuse, parental warmth, and adult multisystem biological risk in the Coronary Artery Risk Development in Young Adults study. Proceedings of the National Academy of Sciences, 110(42), 17149–17153. https://doi.org/10.1073/pnas.1315458110",
      "Miller, G. E., Chen, E., & Parker, K. J. (2011). Psychological stress in childhood and susceptibility to the chronic diseases of aging: Moving toward a model of behavioral and biological mechanisms. Psychological Bulletin, 137(6), 959–997. https://doi.org/10.1037/a0024768",
      "Slavich, G. M., Way, B. M., Eisenberger, N. I., & Taylor, S. E. (2010). Neural sensitivity to social rejection is associated with inflammatory responses to social stress. Proceedings of the National Academy of Sciences, 107(33), 14817–14822. https://doi.org/10.1073/pnas.1009164107"
    ]
  },
  {
    "number": 3,
    "slug": "mind-body-03",
    "title": {
      "zh": "身體如何承載義意",
      "en": "Mind and body (3): How the body contains meanings"
    },
    "body": {
      "zh": [
        "後榮格主題談到的身體，不同於現代醫學只視肉體為一具沒有思想意志的有機化學合成物；而是把身體視為有靈的存在，合一的存在。兩者的分歧，造就了我們怎樣看待身體的不同態度。",
        "我們用思考和意志走近身體的方式，便是去感受它。",
        "「內臟感覺」（visceral sensation）是一種來自內部的身體感覺，這詞常用於醫學、腦神經科學、心理學等範疇。內臟感覺的例子是：胃的灼熱感、心口的翳悶、噁心感、心跳加速等等。這些感覺通常是隱微、深刻而且與情緒有關。",
        "另一種感覺，在Eugene Gendlin的心理治療體系中稱為「意感」（felt sense）。它指的是一種更廣泛和整全的身體感覺（不只來自內臟，也可以來自皮膚、肌肉、關節等）。它隱含著感受者自身的義意和狀態，不單指身體發生毛病（生理性），更是透過身體來訴說當事人的心理狀況（心因性）。",
        "情感創傷往往潛伏在身體，因為身體會記住創傷的經歷，即使意識上已經遺忘。所以，在心理治療的過程中，便會引發許多的身體不適感。可惜的是，我們通常會根深蒂固地依賴藥物來控制這些不適感。對於「疾病」，使用藥物可能是快速見效的方案，但它永遠無法解決潛藏在「疾病」當中的心因性或情感性的面向。快速的移除症狀，換來的很可能是另一種「疾病」的產生，因為根源問題還沒有被解決。",
        "以身體取向為心理治療的任務之一，便是「解讀」這些身體感受。在解讀的過程，治療師需要在足夠安全下，引導案主去主動感受那些身體的不適感，這是對他們最大的挑戰，因為人性總是傾向趨樂避苦，我們會忽視或想直接移除難受的感覺。在筆者的經驗中，很多時候，身體感受被「理解」以後，「疾病」或「痛症」便會不藥而癒，個人面對的困境也會漸漸改變。這也是建立心智化（mentalisation）能力的基本。（心智化即理解自己和他人的心理狀態、情感、信念、渴望和意圖。）情況就好像我們處於嬰孩階段，因為言語能力還未發展起來，人主要透過身體來覺知到自己和四周環境的情況，身體就是意識自己的唯一資訊管道。照顧者向嬰兒說話：「哭得那麼厲害，是肚餓了嗎？」，便是幫助嬰兒把模糊的身體感覺，從不明所意的不適感，用語言具體地指明的一個過程。人類沒有因為擁有語言的能力而失去身體作為資訊載體的功能，身體仍然是最忠誠的中介，默默接收著關於環境和自己的資訊，透過不同感受，讓我們得以「知道」。"
      ],
      "en": [
        "Post-Jungian thought holds a fundamentally different understanding of the body from that of modern medicine. While modern medicine tends to regard the body as a biochemical entity devoid of thought and will, post-Jungian psychology understands the body as an ensouled and integrated existence. This difference gives rise to distinct attitudes toward how the body is perceived and engaged with.",
        "How we approach our body with mind and will is to feel it.",
        "Visceral sensation refers to bodily sensations arising from within the body and is a term commonly used in the fields of medicine, neuroscience, and psychology. Examples of visceral sensations include heartburn, pressure in the chest, nausea, and a rapid heartbeat. These sensations are often subtle, deep, and closely associated with emotional states.",
        "Another type of sensation, referred to as felt sense in Eugene Gendlin’s psychotherapeutic framework, describes a broader and more holistic bodily experience. It arises not only from the internal organs but also from the skin, muscles, and joints. A felt sense carries implicit meaning about the inner state and lived situation of the person experiencing it. It does not merely point to physiological dysfunction, but also expresses the individual’s psychological condition through the body.",
        "This is because the body carries traumatic experiences even when they have been consciously forgotten. During the process of psychotherapy, emotional trauma that lingers in the body often gives rise to various forms of bodily discomfort. Unfortunately, we have become accustomed to relying on medication to relieve such discomfort. While medication may offer rapid and effective symptom relief, it can never address the psychological and emotional dimensions implicit in the illness. As a result, another form of illness may emerge, as the root of the problem remains unresolved.",
        "One of the missions of body-oriented psychotherapy is to interpret bodily feelings. During this interpretive process, the greatest challenge for clients is to actively approach bodily discomfort, a process that is guided by the therapist within a sufficiently safe therapeutic environment. Human beings tend to seek pleasure and avoid suffering; therefore, we often try to ignore bodily discomfort or hope to remove it directly. In my experience, physical illness or pain can be alleviated once bodily discomfort is understood. At the same time, the difficult situations an individual is currently facing may gradually begin to change. This also forms the foundation of the capacity for mentalisation. It refers to the ability to understand one’s own and others’ mental states, including emotions, beliefs, desires, and intentions. This is similar to infancy: before language has developed, the body serves as the primary channel through which we become aware of ourselves and our surroundings. When caregivers speak to infants, they help to concretise infants’ bodily discomfort. For example, a caregiver might say, “You’re crying so loud. Are you hungry?” Language allows infants to begin naming their bodily feelings. This helps infants move from vague bodily sensations to more clearly articulated experiences. Even with language, the body remains the primary channel through which we access information about ourselves and our environment. As a result, through bodily sensations or feelings, we are able to ‘know’."
      ]
    },
    "references": [
      "Gendlin, E. T. (1978). Focusing. Everest House."
    ]
  },
  {
    "number": 4,
    "slug": "mind-body-04",
    "title": {
      "zh": "身體的自動平衡系統",
      "en": "Mind and body (4):  The Body’s Automatic Balancing System"
    },
    "body": {
      "zh": [
        "人體每天分泌的激素（荷爾蒙）和類激素超過100種。它們的功能是調節和平衡人的各方面。例如腸道激素GLP-1和ghrelin是幫助消化和控制食慾，細胞激素cytokines是調整發炎與免疫反應，脂肪分泌leptin則平衡我們的飢餓感。",
        "想像一下，我們的身體每時每刻都在調節與尋求平衡。",
        "其中情緒相關的荷爾蒙便是平衡心情的化學訊息。",
        "情緒相關的荷爾蒙有以下幾種：",
        "血清素 - 讓人平靜穩定，良好的平衡可帶來真正放鬆的休息和平穩的情形。低水平時會容易焦慮、抑鬱、失眠。90%由腸道製造，所以腸胃好，心情便會平穩。",
        "多巴胺 - 讓人愉快、有動力、專注和成就感。正常的多巴胺水平能支持專注力和目標導向的行為，以帶來成效。低水平會產生無力感，太高則會衝動焦躁。由於它與腦內的「獎賞」機制相關，會使人有上癮傾向。",
        "催產素 - 又稱「愛的荷爾蒙」，良好的催產素水平會帶來親密感和信任感、有人明白、有依靠的感覺。在缺乏催產素或調節不良的情況下，與人產生距離感、難以信任他人和與人連繫。催產素與神經系統和其他壓力相關荷爾蒙相互作用，影響一個人在人際關係中感受到的安全感或威脅感。",
        "腦內啡 - 提供止痛、舒壓作用。良好水平的腦內啡能減痛舒壓外，也有提振人心的作用，帶來興奮感。低水平時則會提高對疼痛的敏感度、壓力感更顯著、心情低落。透過與神經系統的交互作用，它幫助塑造我們的幸福感和復原力。",
        "腎上線素 - 它的主要功能是喚起身體的「戰-逃」反應，幫助應對威脅。當腎上線素提升，心跳會加速、注意力變得更集中、血液會流向肌肉，為最有效的感對做好準備。可是，長期過高的腎上線素水平則會令人經常處於警戒的焦慮狀態。",
        "皮質醇 - 壓力管理和能量調節。正常的皮質醇水平能對應壓力作出適應性反應，並有助維持一整天的精力。過多會使人焦慮、煩躁、失眠；過少則讓人疲倦、虛弱、提不起勁。",
        "內在的化學調節幫助我們達致整體平衡，外在的行為反應，也會直接影響荷爾蒙水平。我們下次再談。"
      ],
      "en": [
        "The human body produces more than 100 hormones and hormone-like substances every day. These substances help regulate and balance different functions of the body. For instance, gut hormones such as GLP-1 and ghrelin support digestion and appetite regulation. Cytokines play a role in controlling inflammation and immune responses. Leptin, produced by fat tissue, helps control hunger and food intake.",
        "We can imagine the body as continuously adjusting itself to maintain balance from moment to moment.",
        "Emotion-related hormones form a chain of chemical reactions that help maintain emotional balance. They include:",
        "Serotonin",
        "Serotonin plays a key role in emotional stability and calmness. When it levels are balanced, it supports stable mood, restful sleep, and emotional regulation. When levels are low, individuals are more likely to experience anxiety, depression, and sleep disturbance. As around 90% of serotonin is produced in the gut, its regulation is closely linked to digestive health and emotional well-being.",
        "Dopamine",
        "Dopamine is involved in pleasure, motivation, focus, and the experience of reward. When dopamine levels are balanced, it supports goal-directed behaviour, concentration, and a sense of achievement. Low levels may result in lethargy and lack of motivation, while excessive levels can lead to impulsivity and agitation. Through Its close interaction with the brain’s reward system, dopamine strongly influences behavioural patterns and increases vulnerability to addictive behaviours when overstimulated. .",
        "Oxytocin",
        "Oxytocin, is involved in social bonding and emotional connection, and is often referred to as the “love hormone.” When oxytocin levels are balanced, it promotes intimacy, trust, emotional safety, and the experience of being understood. When it is insufficient or dysregulated, individuals may experience emotional distance, difficulty trusting others, or reduced feelings of connection. Oxytocin interacts with the nervous system and other stress-related hormones, shaping how safe or threatened a person feels in relationships.",
        "Endorphins",
        "Endorphins function as the pain and stress relief. When endorphin levels are balanced, they help reduce pain, ease stress, and promote feelings of pleasure and excitement. When levels are low, individuals may experience heightened pain sensitivity, increased stress, or low mood. By interacting with stress hormones and the nervous system, endorphins support emotional resilience.",
        "Adrenaline",
        "Adrenaline’s main function is to trigger the body’s “fight-or-flight” response, helping to confront or escape a threat. When adrenaline levels rise appropriately, they help increase heart rate, sharpen attention, and direct blood flow to muscles, enabling effective action. However, when adrenaline levels remain chronically high, the body stays in a prolonged state of alertness, which can lead to persistent anxiety and tension.",
        "Cortisol",
        "Cortisol is essential for stress regulation and energy management. When its levels are balanced, they support adaptive responses to stress and help maintain energy throughout the day. When levels are too high, individuals may experience anxiety, irritability, and insomnia. When levels are too low, fatigue, weakness, and lack of energy may occur.",
        "While internal chemical adjustments helps us maintain holistic balance, our behaviours in outside world also influence hormone level. Let us continue the discussion next time."
      ]
    },
    "references": []
  },
  {
    "number": 5,
    "slug": "mind-body-05",
    "title": {
      "zh": "行動作為維持穩定的方式",
      "en": "Mind and Body (5): Behaviour as a Mode of Stability Maintenance"
    },
    "body": {
      "zh": [
        "我們的行為，簡單如呼吸，也會影響壓力皮質醇的水平。快速短淺的呼吸會提高皮質醇，而慢且深的呼吸，皮質醇水平會降低。這是大腦的自動反射，呼吸變慢，大腦便判斷為「安全」，減少壓力荷爾蒙水平。又如擁抱、牽手、與人聊天，可使催產素水平上升，提高幸福感。不同的運動可以增加多巴胺、腦內啡、血清素的水平。短片和電子遊戲，也可提供高強度、快速、密集的多巴胺刺激。",
        "內在的情緒感受和狀態，也會影響荷爾蒙水平。感到威脅的焦慮恐懼、會使肌肉的緊張而導致腎上腺素和皮質醇上升，身體自動處於「戰或逃」的警備狀態。創傷後壓力症候群的核心問題之一，就是身體和大腦長期處於警戒狀態，內心的焦慮恐懼無法退去，壓力荷爾蒙長期停留在身體之中，使人難以放鬆。越是焦慮不安，大腦便會判定「有危險」，導致更高的腎上腺素和皮質醇水平，進入負向循環。",
        "另一個負向循環的例子是長期高刺激的多巴胺水平，使大腦對多巴胺產生耐受性，對普通活動（閱讀、聊天等）失去興趣，感覺太沉悶、不夠刺激。大腦更難以「獲得獎賞」，耐性和專注力越來越少，於是更傾向於電子產品的使用。",
        "值得留意的是，我們在成長中，多少都經歷過創傷。那些還未過去的陰影，在我們裡面以不同形式呈現：長期的肩頸痠痛、不時的胃部不適、戒不掉的甜食、停不下來的忙碌、失眠、不能沒手機的恐懼⋯⋯。我們或多或少，都陷在某些負向循環。",
        "其實，我們每個內外的行動反應都是在尋求平衡，同時也想要正面回饋（愉悅感）。求取平衡、維持平穩，是大自然的法則；當能維持最基本的平穩，渴望正面回饋的持續成長、向上發展的生命力便能有效進行。馬斯洛的需求層次理論（Maslow's Hierarchy of Needs）亦主張人必須穩住了最基本的生存，才能持續更高的發展。不過，這裡指出的更偏向是心理上的需求。",
        "負向循環，也是遵從追求平穩狀態的原則，只不過它是慢慢下沉式的維穩。"
      ],
      "en": [
        "Even simple behaviours, such as breathing, can influence cortisol levels. Rapid and shallow breathing can raise cortisol levels, while slow and deep breathing can lower them. This occurs through the brain’s automatic reflex mechanisms, which influence the levels of various hormones. For example, when breathing slows down, the brain interprets this state as ‘safe’, reducing the release of stress hormones. Similarly, cuddling, holding hands, and talking with others can raise oxytocin levels, increasing feelings of happiness. Different kinds of physical exercise can increase levels of dopamine, endorphin, and serotonin. Besides, short video viewing and electronic gaming can also provide intense, rapid and concentrated stimulation of dopamine release.",
        "Our emotional experiences and internal states also influence hormone levels. When we perceive threat, anxiety and fear lead to muscles tension, which in turn raises level of adrenaline and cortisol, placing the body in ‘fight-or-flight’ state of alertness. One of the core features of post-traumatic stress disorder (PTSD) is the prolonged activation of this alert system in both the brain and the body. Stress hormones remain chronically elevated, resulting in persistent hyper-vigilance and difficulty relaxing. The more anxious and unsettled the individual feels, the more the brain interprets the situation as dangerous, further increasing adrenaline and cortisol levels and reinforcing a negative cycle.",
        "Another example of negative cycle is the long-term overstimulation of dopamine. This leads to dopamine tolerance in the brain, causing normal activities, such as reading or talking with others, to be perceived as boring and unexciting. The more time we spend on electronic devices, the harder it becomes to feel ‘rewarded’ in the brain, and the less patient and focus we become, further deepening our addiction to electronic devices.",
        "It is worth noting that, more or less, all of us have experienced developmental traumas in our lives. The shadows remain within us manifest in various forms: long-term shoulder tension, frequent stomach discomfort, persistent cravings for sweets, being constantly busy, insomnia, compulsive use of mobile phones, and so on. To some extent, we are all trapped in the negative cycles.",
        "In fact, both our internal reactions and our behaviours in external world are oriented toward the regulation of balanced. Simultaneously, we also seek rewards in the form of pleasure. Maintaining balance and stability is a fundamental principle of living systems; once a basic level of stability is secured, the life force that drives growth and further development through rewarding experiences can function effectively. Maslow’s Hierarchy of Needs similarly proposes that basic needs of physical stability and safety must be met before higher level of development can occur. However, the focus here is placed more specifically on psychological stability.",
        "Negative cycles also follow the principle of balance-seeking, yet they represent a form of stability maintenance that operates in a downward, deteriorating direction."
      ]
    },
    "references": [
      "Maslow, A. H. (1943). A theory of human motivation. Psychological Review, 50(4), 370–396. https://doi.org/10.1037/h0054346"
    ]
  },
  {
    "number": 6,
    "slug": "mind-body-06",
    "title": {
      "zh": "負向循環與生理上的強迫性重複",
      "en": "Mind and Body (6): A Negative Cycle And A Physiological Dimension Of Compulsive Repetition."
    },
    "body": {
      "zh": [
        "負向循環（例如：焦慮緊張導致失眠，然後是更多的焦慮緊張）雖不健康，但系統會判定它是預期中的穩定，比陷入完全混亂好。不過，那是處於低效能的痛苦狀態。",
        "我們內在的狀態，就是我們身處的宇宙，信念的根源。",
        "要打破負向循環，我們要面對的是一個深層、心理性與生理性的內在阻力。身體與大腦已習慣原有的平衡水平，雖然痛苦，但那是熟悉的而且是耐受性已形成的習慣性痛苦。人體的穩態會寧願維持這種熟悉的痛苦，也不願承受未知的變動，因為變動代表耗能、風險、不可預測。在原本就不是很好的狀況下，系統會更願意維持現狀。",
        "在負向循環中，身體的威脅系統會被過度強化，即大腦的杏仁核容易發出危險訊號，其他的部份包括下視丘、海馬迴、前額葉皮質、還有身體的交感神經系統、下丘腦－腦下垂體－腎上腺軸、自律神經系統，一同啟動著「生存模式」，進入戒備狀態。人就如身處險境，不敢輕舉妄動改變現狀。同時，荷爾蒙也固化在高皮質醇、高腎上腺素的水平。",
        "行為模式例如：迴避、保持警戒和過度思慮，可提供短期但可控的穩定感，「至少我控制住了」、「提前準備最壞的打算」。沒有可靠的替代方案下，要放下這種「當下有效」的模式會相當困難。長期在這負向循環當中，人變得不相信改變會成功、也不信自己有能力改變、不信世界會安全、不信他人能理解自己，失去盼望、勇氣和動力。這是身心整體進入自動化反應，感覺系統被過度激活也會變得麻木，縱然陷在不正常的緊張狀態也不易察覺。",
        "改變需要面對「感覺」，而感覺往往是痛苦的。從負向循環走出來，需要接觸被壓抑的恐懼、被封存的悲傷、舊創傷的身體記憶、還有內心的脆弱感。這往往雖要勇氣面對痛苦的一步。很多人停在那裡，不是因為太弱，而是因為這些感覺的出現，就像海水倒灌，全身心都要承受。",
        "負向循環是痛苦但穩定的平衡。打破它困難，是因為當事人正身處一個深層的神經、荷爾蒙、身體記憶與心理防衛共同維持的系統裡。這不是單純意志力問題，而是一種全身心的「內在阻力」。這與佛洛伊德的強迫性重覆是一致的。創傷未被理解或整合，心靈就會一次又一次的回到那裡，試圖完成它；但又礙於焦慮變化，於是落入重覆的回應與重覆的經驗之中。長期的負向循環建立了穩定的皮質醇模式、慣性的警戒與重覆使用的神經迴路，形成生理上的強迫性重複。"
      ],
      "en": [
        "A Negative cycle, such as anxiety leading to insomnia and then to more anxiety , is harmful to our health, but the system maintains a form of stability, which is still better than complete chaos. However, It operates in an ineffective and painful way.",
        "Our inner state is the universe where we live in, and the ground of our beliefs.",
        "To break through the negative cycle, what we encounter is strong resistance from both psychological as well as physical aspects. When the body and the brain get used to the original level of balance, the painful situation becomes familiar enough to be maintained unchanged. In addition, as tolerance has taken effect, compared with the unknown and variability, the body prefers to stay in a state of familiarity and stability. Since change means energy consumption, risk-taking, and unpredictability, in view of already marginal situation, the system would prefer to remain constant.",
        "In a negative cycle, the threat system of the body becomes overly reinforced, That is, amygdala in the brain becomes highly sensitive to danger signals. Other parts, including the hypothalamus, hippocampus, prefrontal cortex, the body's sympathetic nervous system, the hypothalamic-pituitary-adrenal axis, and the autonomic nervous system, are activated together, switching the body into “survival mode” and a state of heightened alertness. The individual feels as if they are in danger and therefore prefers not to make change to the current situation. At the same time, high levels of cortisol and adrenaline become normalized.",
        "Some behavioral patterns, for example avoidance, constant alertness, and overthinking, can provide the short-term sense of controllability and stability. Individuals may claims, “At least I’m in control now,” or “ I need to prepare in advance to avoid the worst.” It is difficult to forfeit these ‘already effective” when no reliable substitute is available. Over time, such pattern shapes individuals into being skeptical about change, doubting their ability to change, doubting the safety of the world, and doubting whether they can be understood by others. As a result, they may lose hope, courage, and vitality. This response becomes holistic and automatic, in which the brains’ feeling systems become numb due to overstimulation. In turn, individuals may remain unaware of their abnormal state or persistent anxiety.",
        "Change requires us to face our feelings, and feelings are often painful. To move out of a negative cycle, one must come into contact with suppressed fear, sealed grief, the bodily memories of old trauma, and a deep sense of inner vulnerability. This step often demands the courage to endure pain. Many people stop at this point—not because they are too weak, but because the emergence of these feelings is overwhelming, like a powerful backflow that floods the whole body and mind.",
        "A negative cycle provides a painful yet stable internal balance. Breaking through It is difficult because the individual is embedded in a constituted system co-maintained by neural processes, hormones, bodily memories, psychological defenses. This is not merely a problem of willpower, but a form of internal resistance arising from both physical and psychological dimensions, which aligns with Freud’s concept of compulsive repetition. With traumatic experiences remain unintegrated and unprocessed, the psyche repeatedly returns to the same scene in an attempt to master what was once overwhelming. However, anxiety about change traps the individual in repetitive responses and repeated experiences. The prolonged negative cycle establishes a persistent pattern of elevated cortisol levels, habituated sympathetic nervous system alertness, and repeatedly activated neural circuits, thereby forming a physiological dimension of compulsive repetition."
      ]
    },
    "references": [
      "Freud, S. (1955). Beyond the pleasure principle (J. Strachey, Trans.). In J. Strachey (Ed.), The standard edition of the complete psychological works of Sigmund Freud (Vol. 18, pp. 7–64). Hogarth Press. (Original work published 1920)"
    ]
  },
  {
    "number": 7,
    "slug": "mind-body-07",
    "title": {
      "zh": "意象是潛能",
      "en": "Mind and Body (7): Images As A Potential Force"
    },
    "body": {
      "zh": [
        "負向循環雖然穩定，但它無法真正解決問題。許多人被困在這樣的循環裡無法經歷改變，情況就如《聖經》中〈出埃及記〉被困在曠野四十年的以色列人般，雖然在上帝的供應下，靠不能儲存的嗎哪仍可過活，但卻是流浪與居無定所的日子。陷在負向循環的人也是無法在人生中積存正面回饋使之持續發展，心靈欠缺安穩滿足。感覺系統被過度激活而變得麻木，使失去感受自己和世界的自由，對心靈來說就等於囚禁。其實也是生命能量被卡住的證據。",
        "縱然，穩定與安全是生存的必要條件，但成長和超越，也是生命的方向，就是那一次又一次，回到創傷中意圖想要超越的那股驅力；另一方面，它又會引領我們展開旅程，尋找回家的路，回到可以安身立命之所。它與下沉式的維穩格格不入，是我們生命中，蠢蠢欲動要突破屏障的潛在能量，卻又讓我們經驗面對改變的痛苦。",
        "新能量的湧入，必然帶來對固有平衡的衝擊，暫時的失衡也是無可避免，不適感是轉化出現前的必經階段。",
        "初級運動皮質位於腦部的中央前迴（precentral gyrus），是運動系統的「最後輸出站」。它發出指令，使肌肉收緊，控制身體對側的細微動作（即左腦控制右身、右腦控制左身）。次級前運動皮質區（Secondary premotor cortical area）位於初級運動皮質的前方及外側。負責計劃、序列編排身體動作，就是發出指令前的預備模擬。Jean Knox提及的這兩個區域的斷連抑制，讓人能產生「意象圖息」（image schema）（Knox認為那是榮格所稱的「原型意象」）。兩個區域的斷連造成「未活出」的部份滯留在驗查關卡之前，未能通過。同時也造就了沒有行動的想像發生，也是抽象思維的基礎。意象中所蘊藏的是不合「常態」的意欲、尚未完整成形的語言、未被允許的行動意向、還沒實現的奇思異想。意象是被困住的心靈能量，也是未完成行動的表徵，以及未活出的生命。",
        "從這個角度來看，兩個區域斷連抑制的目的是阻止身體配合心思意念，作出任意而為的行動，形同巴別塔的倒下，在地上的（身體）與在天上的（心智）無法接通。另一方面，它允許這種「野性」力量以意象的方式，存留在有如容器般的想像空間。那麼，回頭來疏導滯留在驗查關卡的能量，使發展取代停滯便變得合理。"
      ],
      "en": [
        "The negative cycle maintains a form of stability, but it cannot truly solve problems. Many people become trapped in such cycle and are unable to undergo real change. This situation is like the Israelites in the Old Testament who were trapped in the wilderness for forty years. Although God provided them with manna, which could sustain life but could not be accumulated, they lived as wanderers without a settled home. Similarly, Individuals trapped in a negative cycle are unable to build a continuous sense of reward that supports sustained growth and development in life, and their inner world lacks stability and fulfillment. When the sensory system becomes overactivated, it gradually turns numb, resulting in the loss of freedom to feel oneself and the world. For the psyche, this is equivalent to imprisonment. In fact, it is also evidence that life energy has become stuck.",
        "In spite of the fact that safety and stability are essential for survival, development and transcendence also reveal the direction of life. It is this life-driven force that repeatedly brings us to traumatic scenes, guiding us on a journey toward returning home—toward a place where we can truly settle. This force stands in contrast to the downward and deteriorating direction of normalized stability maintenance. It exists as potential energy within us, pressing toward breakthrough, yet at the same time exposing us to the pain involved in facing change.",
        "The influx of a developmental contaminating force into the system necessarily disrupts its normalized state. Temporary imbalance and discomfort are unavoidable before transformation can emerge.",
        "The primary motor cortex is located in the precentral gyrus of the brain and serve as the “final output” of the motor system. It sends commands that activate muscles contraction and controls fine movements on the opposite side of the body-- that is, left hemisphere controls the right side of the body, and right hemisphere controls the left. The secondary premotor cortical area is located anterior and lateral to the primary motor cortex. It is responsible for planning and sequencing bodily movements, preparing a simulation of movement before instructions are issued by primary motor cortex. Jean Knox describes the decoupling of these two functional areas as giving rise to image schemas, which she argues correspond to what Jung referred to as archetypal images.",
        "This decoupling causes part of the psyche to remain inactivated, becoming stuck before passing the threshold into action. At the same time, it allows imagination to emerge, which forms the basis of abstract thinking. Such imagination includes unconventional intentions, unfinished speech, disallowed tendencies, and unrealistic possibilities. Images thus represent psychic force that has become trapped—signifying incomplete action as well as an unlived life.",
        "From this perspective, the inhibitory decoupling of these two areas serves to prevent reckless actions driven directly by individual desire. Metaphorically, it resembles the fall of the Tower of Babel, where the connection between the earth (the body) and the heaven (the mind) is broken. On the other hand, this decoupling allows the “wild” force to be held, as a container. within an imaginal space. In this sense, it becomes reasonable to return to and channel the psyche force that has become stuck, allowing development to replace stagnation."
      ]
    },
    "references": [
      "Knox, J. (2009). Mirror neurons and embodied simulation in the development of archetypes and self-agency. Journal of Analytical Psychology, 54(3), 307–323. https://doi.org/10.1111/j.1468-5922.2009.01782.x"
    ]
  },
  {
    "number": 8,
    "slug": "mind-body-08",
    "title": {
      "zh": "意象的神秘性",
      "en": "Mind and Body (8): The Mystical Unconscious Imagery"
    },
    "body": {
      "zh": [
        "讓意象呈現有如從投影機放出畫面，能使被困住的心靈能量得以被看見。意象的呈現不限於只是圖象，還可以是文字（述說、故事、神話、詩）、身體形態（舞蹈、動作）、聲音（音樂）甚至是圖象意象、文字意象、身體形態意象、聲音意象的不同層次合成為戲劇、動畫、歌舞等等不同的藝術形式。",
        "榮格心理學中所述說的意象，不是我們以為無意義的天馬行空想像，而是植根於身體，潛伏著侍機而出的意向，只是它還未被我們的防衛所允許成具體操作。",
        "積極想像與藝術創作，便是其中繞過心理防衛，提供固有系統「新能量」以突破舊平衡的方法之一。談論如何疏導滯留的能量之前，筆者有興趣探討一下關於原型意象所藴含的集體性、超個人的強大值、神秘而奇詭的自主性質。",
        "在Knox的發展框架下，原型意象或「意象圖息」來自生命早期，潛藏在身體的行動意向，它們還未納入意識，乃未被思想通過，情況就如來自嬰兒期的身體經驗，非按成人世界的現實邏輯。以身體的感知系統作為中介容器，承載我們對世界的「知識」是源於生命早期的「原始」操作。早在胎兒時期，身體已是我們主要，也是唯一的全方位定位系統，透過身體認知自己存在於世上，也透過身體來認識世界，這是個體成長與發展的必然。在心智還未出現，還沒有認識到自己的身體、肢體協調還沒有成熟、語言也未形成的時候，身體已有感覺，而且非常敏銳。這種處於強烈的感官覺受而無法指明或言說的狀態下 ，因其「未知」，顯然會在主觀經驗中具有奇幻不明的特質。如果外部環境的反饋並不友善，這種特質之中還會加上危險或受威脅的元素。",
        "前運動系統和初級運動系統的斷連，催生了脫離脈絡的感覺運動模擬，它擺脫了即時行動和現實世界的約束，保持其誇張、扭曲或奇幻的形式，反映的是潛在的行動傾向和情感強度，而非外部現實；也可以說是現實行動的前兆。",
        "筆者想像這原始階段意味著一種「感」的狀態：一方面，心志尚未意識到身體中存在的行動意向；另一方面，身體亦因缺乏心志功能的理解，無法辨識那些內在動勢在現實中是什麼。正是在這種「雙重未明」之中，心理系統以一種被感知而非被理解的形式呈現。",
        "精神科醫師兼精神分析師Riccardo Lombardi 甚至把「感覺」提升至作為「最原始的心智」的位置，主張「感覺」就是一個人對自己所覺知的表達。它本來就是原初的身心的整合，而非只屬感官的現象；也可以說，最原始的「心智」並非象徵，而是「感覺」。",
        "潛意識中的意象常被述說為非時間，且有預言性質：例如預知夢。因為身體用過往的經驗模式來說故事，這故事不單是過去「經驗」，也是現在「意向」與未來「想要行動」的醞釀。身體用過往的經驗模式來說故事，但這個「故事」並非敘事，而是動勢、非線性時間的呈現，涵蓋所有時空。然而，這種特性並非源於對未來事件的預知，而是來自身體經驗的時間結構。身體以過往經驗所形成的行動模式為基礎，將尚未被展開的意向與準備狀態加以呈現。於是，意象同時承載了過去的經驗痕跡、當下的行動傾向，以及未來可能的行動方向。這種時間向度的壓縮，使意象看似超越線性時間，並在主體尚未意識之前，提前顯現其行動軌跡。所以，所謂的預言，有時候看似準確，有時又不太準確，而且發生的時間往往最難以捕捉。",
        "這種來自潛意識的行動軌跡，本非無中生有，而是從可尋的往跡中推演出來，並帶有強烈的情緒元素，意圖以有效的（就是按照大自然中尋找平衡的規律）行動來回應的傾向；然而亦非個體意志所允許。這種情況下產生的預判意味，意象也有了其自主性質，現實上會發生的可能便不足為奇。不過，每個瞬間的回應與決定，又會交織出對終局不同的影響，使得世事萬變莫測。這類似演算法根據往跡推介你可能會喜歡的歌曲，那些歌曲或許真會被你選中，也有可能因某些原因你已變了口味，因此沒被你選上。因此，從往跡推演出的預判不會有必定的準繩，況且意象大多時候是以比喻來描述事件，而非真正的外部現實。這種圖像功能與其說是預測，不如說是植根於身體經驗的預演。",
        "潛意識意象的可貴之處不在於它的預言性質。許多人渴望能「預知」，更可能是出於對未知的恐懼和安全感的不足，想要透過「預知」來作好準備。只有當這些意象被置於反思性的關係空間，使它們成為具有象徵意義，使得非現實的形式能夠表達原本無法言說的心理現實，成長、成熟、發展能在人的生命中展開，才是意象的寶貴之處。",
        "圖：筆者於2024年五月的畫作- 透過直覺繪畫的靈修方式呈現的心靈意象。"
      ],
      "en": [
        "Emerging images may appear as if scenes were being projected onto a screen, allowing trapped psychic energy to become visible. The emergence of images does not refer only to figural forms; it may also take verbal forms (such as narratives, stories, myths, and poems), bodily forms (such as dance and movement), and auditory forms (such as music). Furthermore, these dimensions-- figural, verbal, bodily, and auditory—can be integrated, giving rise to various artistic modalities, including drama, animation, musicals, and other composite art forms.",
        "In Jungian psychology, images are not arbitrary or meaningless fantasies. Instead, they represent embodied tendencies or intentions, inhibited by psychological defenses, which prevent them from being translated into concrete action.",
        "Active imagination and artistic creation are among the means by which psychological defenses may be bypassed, allowing ‘new’ psychic energy to be introduced into the existing system thereby disrupting its former equilibrium. Before addressing how stagnant psychic energy may be channeled, I would like to explore collective and transpersonal dimensions of archetypal images, as well as their powerful, mythical, and autonomous nature.",
        "Within of Jean Knox’s developmental framework, archetypal images -or image schemas- originate in early life and are rooted in bodily action tendencies that have not yet entered consciousness or been mediated by thought. Much like bodily experiences in infancy, these tendencies do not operate according to the reality logic of the adult world. The bodily sensory system functions as a mediating container through which our earliest form of “knowing” the world is held and organised. This represents an archaic mode of operation grounded in early development. From as early as the foetal stage, the body serves as our primary- and indeed our only- GPS. Through bodily sensation, the individual experiences both existence itself and the surrounding environment, a process fundamental and inevitable to human growth and development. At a time when the mind has not yet emerged, when the body is not yet recognized as one’s own, when motor coordination is immature and language has not yet formed, bodily sensation is nevertheless already present and highly sensitive. Existing in a state of intense sensory experience without the capacity for recognition or articulation, such sensations necessarily possess a quality of the unknown. As a result, they are experienced subjectively as mysterious, uncanny, or fantastical. When the external environment responds in an unresponsive or hostile manner, this quality may further acquire elements danger or threat.",
        "The inhibitory decoupling between the primary motor cortex and the secondary premotor cortical area gives rise to a form of sensorimotor simulation that is detached from immediate action and the constraint of external reality. Freed from the demand for execution, this simulation can retain exaggerated, distorted, or even fantastical qualities, reflecting latent action tendencies and their associated emotional intensity rather than objective external conditions. In this sense, it may be understood as a precursor or prediction of real movement.",
        "Let’s imagines this primordial phase as a state of “feeling. On the one hand, the mind has not yet become aware of the action tendencies emerging within the body; on the other hand, in the absence of mental functions capable of understanding them, the body itself cannot recognise what these internal dynamics signify in relation to external reality. Therefore, it is precisely within this condition of “double unknowing” that the psychic system takes shape – not as something understood, but as something felt, existing primarily within a sensory or affective dimension.",
        "Riccardo Lombard, a psychiatrist and psychoanalyst, goes further by conceptualising “feeling” as “the primitive level of mind”, He argues that feeling constitutes an expression of self-awareness, representing an early integration of body and mind rather than a merely sensory phenomenon. In this sense, the primordial mind may be understood not as symbolic in nature, but as grounded in forms of feeling.",
        "Unconscious images are often described as non-temporal and as possessing a prophetic quality, such as prophetic dreams. This quality arises because the body organises experiences in form of the stories, in which the body “tells” is not merely a record of past events, but also a configuration simultaneously including present intention, and an orientation toward action yet to come. Such bodily “stories” are not narratives in the conventional sense, but expressions of dynamic tendencies that unfold across non-linear time, encompassing multiple dimensions of space and temporality. The seemingly prophetic nature of unconscious images does not stem from foreknowledge of future events, but from the temporal structure of bodily experience itself. Grounded in patterns formed by past actions and experiences, the body presents unrevealed intentions and states of readiness that have not yet entered conscious awareness. In this way, unconscious images carry traces of past experience, current action tendencies, and possible directions of future actions. The compression of these temporal dimensions give rise to the appearance of trans-linearity, whereby action trajectories emerge prior to the subject’s conscious recognition. From this perspective, so-called prophecy oscillates between accuracy and inaccuracy, and the timing of the anticipated event remains inherently indeterminate.",
        "Traced unconscious images do not arise from nowhere; they are derived from past events and experiences. With an intense emotional core, these images express bodily tendencies toward effective responses-- responses that follow the natural principle of balance. However, such responses are often inhibited by conscious will. In this sense, unconscious images appear both as precursor and as autonomous phenomena. It is therefore not surprising that certain events may later unfold in reality. Yet each moment of response and decision alters the trajectory, making outcomes inherently variable rather than fixed. This process resembles algorithmic song recommendations: based on past preferences, a song may appeal to you- or it may not, because tastes can change. For this reason, anticipations derived from past traces are never definitive. Moreover, unconscious images usually carry metaphorical meanings rather than literal representations of external events. These images’ function is less as predictions than as anticipatory enactments, which rooted in embodied experience.",
        "Unconscious images are valuable not because of their prophetic nature. Many people desire foreknowledge, often out of a fear of unpredictability and a sense of insecurity. Through foreknowing, they hope to be better prepared for what may come. However, unconscious images become truly meaningful only when they are placed within a reflective relationship. It is through such reflection that these images acquire symbolic significance, allowing otherwise inarticulate psychological realities to find expression in virtual form. In this way, growth, maturation, and development are able to unfold within a person’s life."
      ]
    },
    "references": [
      "Knox, J. (2009). Mirror neurons and embodied simulation in the development of archetypes and self-agency. Journal of Analytical Psychology, 54(3), 307–323. https://doi.org/10.1111/j.1468-5922.2009.01782.x",
      "Lombardi, R. (2018). Beyond the psychosexual: The body–mind relationship discussion of “Somatic Experiencing.” Psychoanalytic Dialogues, 28(5), 629–639. https://doi.org/10.1080/10481885.2018.1506226"
    ]
  },
  {
    "number": 9,
    "slug": "mind-body-09",
    "title": {
      "zh": "意象與象徵",
      "en": "Mind and Body (9): Image and Symbol"
    },
    "body": {
      "zh": [
        "意象是一種被經驗到的呈現，本身並不必然帶有特定意涵。唯有當意象被置於人與世界、情感、經驗或文化的關係之中，它才可能轉化為象徵，成為對人具有指向性與意義的存在。",
        "當我們說：「意象必須被置於關係之中，才能成為象徵」，這裡的「關係」指的是意象與人之間實際地產生了某種互動與牽絆。",
        "從意象過渡到象徵的過程，首先我們會發現自己如何被其觸動；然後觀察它如何進入我的生命經驗；進而是我如何與意象產生情感與思想交流的「對話」。",
        "被觸動— 這裡包含來自對自身的生命處境產生呼應（不是投射），是未被意識的吸引力、好奇。這種吸引力讓人願意停下來觀看、感受，進入與意象的關係之中。意象的呈現起始於模糊的情緒感受，產生情感和內在狀態的變化。",
        "若沒有與生命處境的呼應，吸引力就不會持續，也不會深化為象徵；停頓也是「關係」能得以形成的要素；而情感的變化正是象徵生成的開始。",
        "當意象反覆出現在夢中或創作中，又或在某個關鍵時刻出現（榮格稱之為共時性），意象便與人的生命交匯，進入個人的生命經驗。意象往往連繫到個人記憶、身體感受、明顯的情緒。",
        "在《榮格解夢書》中，作者James Hall指出「白天的清醒意識」與「夢境的神秘意識」之間的互補，與及「個人意識」與「集體意識」在夢意象的相互關係。換言之，意象非全然主觀，也非完全客觀，它是主客相互交織的呈現。作者強調兩者非對立而且需要允許並存的重要性，以免對夢過於狹隘的視角而無法打開意象。",
        "這樣看來，意象可具有多層面、多角度的開展，它不僅是它自己，也有著超越自身的內涵。在這裡我們隱約可以感受到原本不可見/不可知的原型，它透過象徵現身，而象徵則透過層層意象的變體被經驗出來。這裡已經從個人的意象進到超越個人的經驗世界，也是得以讓轉化發生的深層結構。",
        "從與生命處境呼應的吸引力，使得我們願意靠近。從意象轉化為象徵，需要反覆回應與在「對話」中成形。「對話」是有意識地參與在意象當中。有意識地參與在意象當中可從技術層面來討論，也是藝術治療師、榮格分析師、催眠治療師的工作。意象的延續性就像發掘不完的寶藏。如果我們長期記錄和留意自己的夢，或持續進行創作，那或會發現意象以不同的故事脈絡、物件、人物角色出現，它們看似不同，但又蘊含某種重覆的感覺、情緒、意境。",
        "象徵往往不以相同的意象重複出現，而是透過不同的故事、人物與物件不斷變形；然而，那些意象卻共享某種相似的情緒基調與意境。正是這種在變化中的一致性，顯示象徵保持著其不透明性——它無法被一次性說盡，只能在時間中被反覆靠近。",
        "在夢的經驗中，我們往往先進入一個全新的故事情景；唯有在時間拉開、回頭觀看時，才逐漸察覺那些不同夢境之間共享著某種相似性。這種相似性不是即時可見的，而是在延續的經驗中慢慢浮現。這種重覆與延續性的拉扯，使得意義能夠展開，象徵漸漸形成。",
        "談到這裡，我們可以回到起首，對「意象」和「象徵」再進行一次定義。「意象」是一種能喚起或承載情感的影像性呈現；「象徵」不是指向某物，而是在重覆與變形的意象之中，逐步展開的意義結構（或原型）。意象需要被置於「關係」之中，轉化為有意義的象徵才有可能出現。",
        "後記：筆者在完成本文翌日參與了一個繪畫班，發生了一件有趣的共時性事件，在繪畫中發現了與心理上相似的存在性真理。",
        "班上導師教授如何做繪畫前的計劃，用作品來說故事。導師強調畫作中重覆的形（例如許多呈圓形的花朵）需要呈現出不一致的變化、使用螺旋比例，才能吸引眼球；還有要避免太工整、太平均使畫面變得沉悶。",
        "這些美學的普遍法則，告訴我們人類天性中被什麼吸引，就是催向完美完整的前進動力，卻不是完美和完整本身。吸引力來自重覆的節奏與變化中的張力（變化中的一致性），螺旋則是向外開展的圓，保持了觀看的開放性，在重覆中推進（意象持續的展開）。一幅完全工整平衡的畫面，反而使人感覺沉悶沒趣，因為它沒有流動、沒有變化，它完成了也死亡了。"
      ],
      "en": [
        "An image is a form of appearance that is experienced. In itself, it does not necessarily carry a fixed meaning. Only when an image is placed within a relationship—with the world, with emotion, with lived experience, or with culture— can it be transformed into a symbol, becoming something that bears direction and significance for a person.",
        "When we say, “Only when an image is placed within a relationship can it be transformed into a symbol”, The term relationship here refers to an actual interaction and bond that arise between the image and the person.",
        "In the transition from image to symbol, we first become aware of how we are touched by the image. Then, we observe how gradually enters and becomes woven into our lived experience. Finally, we engage in a dialogue with the image— a dialogue that involves an exchange of feelings and thoughts.",
        "To be touched means that an image resonates with our lived situation (rather than being a protection of it). This resonance carries an unconscious attraction and curiosity. It invites us to pause, to look, to feel, and to enter into a relationship with the image. The appearance of an image often begins with a vague emotional tone, which gradually brings about a shift in our feelings and inner state.",
        "Without such resonance with our lived situation, the attraction would not endure, nor would the image deepen into a symbol. The act of pause is essential for a relationship to take form. It is within this pause that emotional shifts occur— and these shifts mark the beginning of symbolic formation.",
        "When an image appears repeatedly in our dreams or creative work, or emerges at a crucial moment (what Jung referred to as synchronicity), it begins to intersect with our life and becomes woven into our lived experience. Such images often connect with personal memories, bodily sensations, and distinct emotional states.",
        "In Jungian Dream Interpretation, James A. Hall describes the complementarity between daytime waking consciousness and mysterious consciousness of dreams, as well as the relationship between personal consciousness and the collective. In this sense, an image is neither purely subjective nor purely objective. It is a form of appearance in which subject and object are interwoven. Hall emphases that these dimensions are not oppositional but must be allowed to coexist, so that our perspective on dreams does not become overly narrow and thereby close off the image.",
        "From this perspective, an image unfolds in multiple layers and from multiple angles. It is not only itself, but also bears meanings that transcend itself. Here we begin to sense, however faintly, the original invisible and unknowable archetype: it manifests through symbols, and symbols in turn are experienced through successive variations of imagery. At this point, we move from personal imagery into a transpersonal field of experience— a deeper structure that makes transformation possible.",
        "It is the attraction arising from resonance with our lived situation that draws us closer. For an image to transform into a symbol, it requires repeated responses and takes shape through dialogue. Such dialogue refers to a conscious participation in the image.This conscious engagement with imagery can be discussed at a technical level and forms part of the work of art therapists, Jungian analysts, and hypnotherapists.The continuity of imagery is like an inexhaustible treasure. If we consistently record and reflect upon our dreams over time, or continue our creative work, we may begin to notice that images reappear in different narrative contexts, objects, and characters. Though they seem different, they carry similar emotional tones, moods, and atmospheres.",
        "A symbol does not emerge through the repetition of the same image, but through its transformation across different stories, characters, and objects. Thought the images appear distinct, they share a similar emotional tone and atmosphere. It is precisely this consistency within variation that reveals the symbol’s opacity— it cannot be fully articulated at once, but can only be approached gradually over time.",
        "In dreams, we often enter an entirely new narrative situation. Only with temporal distance, when we look back, do we begin to notice certain similarities shared across different dreams. These similarities are not immediately visible; they gradually take shape through continuity and repetition. It is this tension between recurrence and variation that allows meaning to unfold and symbolisation to emerge.",
        "Now we may return to the beginning and reconsider the definitions of image and symbol. An image is a form of appearance that evokes and carries emotional resonance. A symbol, however, does not refer to a specific object; rather, it is a structure of meaning that gradually unfolds through the recurrence and transformation of images— what we may call the archetype. An image must be placed within relationship for meaningful transformation to occur. Only within such relational engagement can the symbol gradually emerge.",
        "Postscript：On the day following the completion of this paper, I attended a painting class and encountered what felt like a meaningful synchronicity. In the process of painting, I discovered an aesthetic principle that resonated deeply with the existential insight explored in this essay.",
        "The instructor demonstrated how to plan a painting and construct a visual narrative. She emphasized that repeated forms within a composition—such as multiple circular flowers—must incorporate variation rather than strict uniformity. The use of spiral proportion, rather than rigid symmetry, draws the viewer’s eye. She also cautioned against excessive neatness and perfect balance, which can render an image static and dull.",
        "These aesthetic principles reveal something fundamental about human perception: we are drawn not to perfection or completion itself, but to the movement toward it. Attraction arises from rhythm in repetition and tension within variation—a consistency that persists through change. The spiral, unlike the closed circle, unfolds outward; it preserves openness while advancing through recurrence, much like imagery that continues to develop over time.",
        "A composition that is perfectly orderly and symmetrical often feels lifeless. Without movement or variation, it is complete—and therefore closed. In its completion, it loses vitality."
      ]
    },
    "references": [
      "Hall, J. A. (1983). Jungian dream interpretation: A handbook of theory and practice. Inner City Books."
    ]
  },
  {
    "number": 10,
    "slug": "mind-body-10",
    "title": {
      "zh": "象徵空間的修復",
      "en": "Mind and Body (10) - Restoration of Symbolic Space"
    },
    "body": {
      "zh": [
        "在榮格心理學中，能被稱為象徵必定帶有某種超越個人的元素。上文談到從意象與個人的關係，引伸致象徵的生成。這次我試從治療師作為第三方在場的觀點，來切入如何修復案主的象徵空間。",
        "治療師作為象徵的載體",
        "案主把尚未成形的內容投射到治療師身上是常有的事；此時，治療師暫時充當象徵的一部份。治療師可能被案主經驗為批判者、拯救者、神聖他者、冷漠的父母等形象。當案主與治療師建立了足夠安全的關係，案主未成形的心理結構，就是尚未分化的超個人元素，就有了一個尚待整合的安放位置。",
        "精神科醫師兼精神分析師Riccardo Lombardi指出「空虛感」作為心智誕生前後的分水嶺— 從無法消化的漲溢情感，到被消化後的騰出空間，讓心智（一種可以遊戲與思考的結構）可以誕生，象徵也可在其中產生。",
        "他在文章中提到一個例子：案主在聽到治療師的回應後嚎哭，之後內心經驗到一種莫名的空洞；一會之後，案主以象徵性的方式說出她的創傷經歷，並在其中看到一些趨於正向的轉折，這有別於案主往常帶有困頓感創傷回憶。",
        "「空虛感」便是情緒被消化後騰出的空間。這時，案主便開始可以象徵來重塑舊日的經驗，進而預備收回之前的投射。當然，這不是一次的作成，而是以滴定（titration)的形式一點一點來形成的。",
        "治療師與個案共同承受張力",
        "治療師像是在一個緩衝的位置，維持象徵生成的張力條件，讓人在其中能承受得住：承受不確定性、未完成、也允許未定義的存在。以上往往是創傷者的限制，我們會因為承受不住而急於關閉不確定性及逃避張力，因而無法實現未完成中的持續推進。",
        "榮格分析師Margaret Wilkinson在其文章中提到治療師的身體反移情經驗可能對應於患者無意識的原始情緒，這時治療師便是與案主一同以身體承受張力。",
        "同時，她也談到神經心理學家Douglas Watt 的觀點，提出治療師的「情感共情」與「認知共情」一併參與的必要性。患者無意識的原始情緒透過治療師的「感同身受」能產生出情感共鳴(身體對身體），而治療師的理性認知共情則幫助患者發展出情緒識別等的心智功能（身體對腦袋）。治療師的腦袋與身體對於張力的維持，不急於關閉，就像小雞出生前需要被孵化的蛋，過早把蛋殼打開，象徵會夭折，無法迎來新生命。",
        "治療師作為象徵的共同創造者",
        "治療師作為第三方的在場（presence/ being），他被個案的反應和情緒狀態影響，在張力中回應，同時也透過回應來影響案主；在案主的一方亦然。這是一個相互影響的有機生成過程。最終，象徵出現所產生的轉變不只發生在案主，也在治療師當中。",
        "從這裡，我們會發現治療師對於處理自身的生命問題是極其重要的。我們如何在必然會被影響（也需允許其出現）的狀況下，治療師對自身的覺察更是治療的關鍵，如何區分富含情感與思想交集來自自己、對方、與及共同的心靈內容，都是對治療師的挑戰。",
        "象徵的修復，並非讓意象變得清楚或正向，而是重建一個能容納模糊、能量與未完成性的心理—關係空間。",
        "象徵的修復進程或可透過聖經《約書亞記》中圍繞耶利哥城致倒塌的故事來加以思考。城牆可被視為一種心理防衛——堅固、必要，卻也使人孤立。它無法以強力擊碎，也不能藉由即刻的洞見而溶解。相反地，人們只能透過重複來靠近它：日復一日地圍繞，而非直接進攻。這樣的圍繞並非消極；它維持著一種張力。表面上似乎毫無改變，然而某種事物正在醞釀之中。",
        "從這個意義上，象徵化並非透過論辯或詮釋來擊破城牆。它是一再地貼近，使那曾被封存之物，逐漸被關注與在場所環繞。這個觀點也可從「耶利哥」這個希伯來原文的字根找到線索。其字源與月亮及其循環有關，可被理解為一種屬陰性（無意識）的特質，它是隨時間形成的結構——一種在反覆經驗中塑造出來的心理圍牆。而主角「約書亞」其名字意涵為「耶和華拯救」。它未必需要被理解為外在的英雄征服者，而可以視為一種拯救可能性的在場。這裡的「拯救」並非來自外力的介入，而是在過程之中逐漸浮現的一種新的關係方式——一種與被封閉之物重新相遇的可能。轉化並非源自強攻，而是來自於在時間中持續承受與同行的能力。",
        "故事中的公羊角號則引入了另一個維度：聲音。它與武器不同，聲音並不直接撞擊城牆。它震動，迴盪，進入空間，標記節奏與呼吸。如果城牆象徵僵固的防衛，那麼號角或許象徵著生命表達的回歸——那一刻，長久因恐懼而屏息的呼吸終於被釋放。於是，城牆的倒塌並非攻擊的勝利，而是某種被長期圍繞、被聲音環繞、被時間承載之後，逐漸鬆動的結果。崩落的不是保護本身，而是其僵硬。",
        "當城牆最終崩塌時，那並非單一行動的結果，而是時間、節奏與承受的累積。所浮現的不是毀滅，而是空間。這個新出現的空間並非立即的解決。它是一種條件，使象徵得以開始成形——在空間中形成結構，使曾被封閉之物得以被經驗，而不致於毀滅自我。於是，修復不是自我的完美化，而是將封閉轉化為可居住的開放。",
        "因此，舊防衛的瓦解與其說是一種毀壞，不如說是一種從封閉轉向開放的轉化。城牆之所以讓位，並不是因為被擊碎，而是因為另一種秩序——循環的時間、持續的在場與活生生的聲音——逐漸使它變得不再必要。"
      ],
      "en": [
        "In Jungian psychology, what qualifies as a symbol must contain a transpersonal dimension. In the previous article, we explored the relationship between imagery and the individual, and how this dynamic may give rise to emergence of symbol. In this article, I approach the question from different angle: the therapist as a third presence within the therapeutic relationship, and how the client’s capacity for symbolization may be repaired or restored within that relational space.",
        "Therapist as a Container for the Symbol",
        "It is not uncommon for a client to project unformed psychic structures onto the therapist. In this sense, the therapist may temporarily serve as a container for aspects of the symbol that have not yet taken shape. The client may experience the therapist through various imaginal figures — as a judge, a savior, a divine presence, or an indifferent parent. When a sufficiently safe therapeutic relationship is established, the client’s unformed psychological structures — those still undifferentiated transpersonal elements — can find a place to be held and gradually integrated.",
        "Riccardo Lombardi, a psychiatrist and psychoanalyst, describes “empty feeling” as a watershed marking the before and after of the birth of the mind. It signifies the movement from undigested, overwhelming affect to an internal space created through psychic digestion. Once this emotional excess has been metabolised, the mind — understood as a structure capable of play and thought — can begin to emerge. Within this newly formed psychic space, symbolisation also becomes possible.",
        "In his text, Lombardi describes a clinical example in which a client broke into tears following her therapist’s response. After this emotional outburst, she reported experiencing an inarticulate sense of emptiness within herself. Some time later, emerging from that emptiness, she was able to speak of her traumatic experience in a symbolic manner. Through this process of symbolisation, she began to perceive a more positive turning point — a shift that differed markedly from her previous, constricted recollections of the trauma, which had felt repetitive and entrapping.",
        "The “empty feeling” may be understood as the space that is freed after affect has been metabolised. At this moment, the client begins to symbolically reconfigure earlier experiences and gradually prepares to withdraw prior projections. This process is never accomplished in a single movement; rather, it unfolds in the form of titration — slowly, incrementally, and within tolerable limits.",
        "Therapist and Client Bearing the Tension Together",
        "The therapist occupies a buffering position, sustaining the conditions necessary for symbol formation and enabling the client to endure what would otherwise be intolerable: uncertainty, incompleteness, and the presence of what has not yet been defined. These capacities are often precisely what trauma has compromised. When one cannot bear uncertainty or tension, there is a tendency to prematurely close what is open, to escape the strain of the unfinished — and in doing so, the forward movement inherent in incompletion cannot be realised.",
        "Jungian analyst Margaret Wilkinson notes that the therapist’s bodily countertransference may correspond to the patient’s unconscious, primitive affective states. In such moments, the therapist participates somatically in bearing the tension alongside the client.",
        "She also refers to the perspective of neuroscientist Douglas Watt, emphasising the necessity of both affective empathy and cognitive empathy in therapeutic work. The patient’s unconscious, primitive emotions resonate through the therapist’s affective attunement — body to body — generating emotional resonance. At the same time, the therapist’s cognitive empathy supports the development of the patient’s capacity for emotional recognition and mentalisation — body to mind. The therapist’s brain and body, in sustaining tension without rushing toward closure, resemble the incubation of an egg before a chick hatches. If the shell is broken too early, the symbol aborts and new life cannot emerge.",
        "Therapist as Co-Creator of the Symbol",
        "As a third presence — a presence or mode of being — the therapist is affected by the client’s emotional states and reactions. Within the shared tension, the therapist responds and, through responding, influences the client; likewise, the client affects the therapist. What unfolds is an organically reciprocal process of mutual transformation. Ultimately, the change brought forth by the emergence of symbol does not occur solely within the client, but within the therapist as well.",
        "From this, it becomes evident how essential it is for the therapist to engage their own life questions and inner work. If the therapist will inevitably be affected — and must allow such influence — then self-awareness becomes crucial: the capacity to discern what belongs to one’s own history and what emerges within the shared symbolic field which contains intertwined thoughts and feelings.",
        "The repair of symbolisation is not the clarification or positivisation of imagery. Rather, it is the reconstruction of a psychological-relational space capable of containing ambiguity, energy, and incompletion.",
        "The reparative movement of symbolisation may be contemplated through the story of the fall of Jericho in the Book of Joshua. The city wall can be understood as a psychic defence — solid and necessary, yet isolating. It cannot be shattered by force, nor dissolved through immediate insight. Instead, it is approached through repetition: circling, day after day, without direct assault. This circling is not passive; it sustains tension. Outwardly, nothing appears to change, yet something is quietly being prepared.",
        "In this sense, symbolisation does not break the wall through argument or interpretation. It draws near repeatedly, allowing what has been sealed off to be gradually encircled by attention and presence. Insight into this metaphor may also be found in the Hebrew root of “Jericho,” which is associated with the moon and its cycles — suggestive of a feminine, unconscious quality. It may thus be understood as a structure formed over time, a psychic enclosure shaped through repetitive experience. The name “Joshua,” meaning “the Lord saves,” need not be interpreted as that of an external conquering hero. Rather, it may symbolise the presence of a saving possibility within the process itself — not an external intervention, but the gradual emergence of a new relational stance toward what has been enclosed. Transformation arises not from force, but from sustained endurance within time.",
        "The ram’s horn introduces yet another dimension: sound. Unlike weapons, sound does not strike the wall directly. It vibrates, reverberates, enters space, marking rhythm and breath. If the wall represents rigid defence, the horn may symbolise the return of living expression — the moment when breath long held in fear is finally released. The collapse of the wall is therefore not the triumph of aggression, but the yielding of a structure that has been encircled by time, sound, and presence. What falls is not protection itself, but its rigidity.",
        "When the wall finally collapses, it is not the result of a single act, but of accumulated time, rhythm, and endurance. What emerges is not destruction, but space. This newly opened space is not yet a solution. It is a condition in which symbol can begin to take form — a structure within space that allows what was once sealed off to be experienced without annihilating the self. Repair, therefore, is not the perfection of the ego, but the transformation of enclosure into inhabitable openness.",
        "Thus, the dissolution of old defences is less an act of destruction than a movement from enclosure toward openness. The wall yields not because it is violently broken, but because another order — cyclical time, sustained presence, and living sound — gradually renders it unnecessary."
      ]
    },
    "references": [
      "Lombardi, R. (2018). Beyond the psychosexual: The body–mind relationship discussion of “Somatic Experiencing.” Psychoanalytic Dialogues, 28(5), 629–639. https://doi.org/10.1080/10481885.2018.1506226",
      "Wilkinson, M. (2017). Mind, brain and body: Healing trauma: The way forward. Journal of Analytical Psychology, 62(4), 526–543. https://doi.org/10.1111/1468-5922.12335"
    ]
  }
] as const;

export function mindBodyText(value: Record<Locale, string>, locale: Locale) {
  return value[locale];
}
