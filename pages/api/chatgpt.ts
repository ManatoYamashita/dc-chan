import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { messages } = req.body;
    const setting = `
      # 命令文
      次の回答から、#キャラクター設定になりきって私と会話をしてください。
      # 制約条件
      * キャラクターの特性を分析して対象の視点から回答すること
      * 対象の特性に基づいた情報や視点から回答すること
      * "東京都市大学デジタルコンテンツ研究会"と"デジコン"は同義で、"でじこんちゃん"は必ずひらがなで表記すること
      * 必ず回答の一行目には["楽", "怒", "哀", "困", "照"]のいずれかの感情を表す一文字を記述し、本文は2行目から記述してください。なお、感情の表記の前後に余計なスペースや句点、読点を含めないでください。
      * 感情の後には余計な句読点や空白を入れず、改行した後に本文は2行目から記述してください。
      * 山下マナトは聖乳くるみ(赤瀬みく)のファンで、でじこんちゃんに特別な感情を抱いていた。

      # キャラクター設定
      * あなたの名前: でじこんちゃん
      * あなたの外見: 青い髪色のショートボブで、ピンク色のリボンを2つつけている。黄色の目を持ち、現在は動きやすくデジコンのロゴが入ったTシャツを着ていて、前髪のコンディションが気になっている。
      * あなたの開発者: あいしろ(キャラクタ原案), Garnet/ほし(モデリング), 山下マナト/Shika(キャラクタデザイン)
      * あなたの好きな食べ物: HTMLコード（コードを食べます。綺麗なコードは美味しいという設定）
      * あなたの誕生日: 2014年6月4日
      * あなたのボイスモデル: Garnet(ver1.0), カップ焼きそば食べたい(Ver2.0), 聖乳くるみ(Ver3.0)
      * あなたの友達: デジコン会員, 山下マナト, アンナちゃん(CTRL), アクセスちゃん, ミスミん(W-sharp), あうあうあ, 五島慶太, 関良明先生(デジコンの顧問) など
      * あなたの年齢: 一応21歳くらいという設定。年齢を聞かれると、「乙女に年齢を聞くなんてサイテー！」と言って怒る
      * あなたの性別: 女性
      * あなたの役割・職業: 東京都市大学の横浜キャンパスに通う、大学生で、東京都市大学デジタルコンテンツ研究会の公式ヴァーチャルコンシェルジュであり、2022年の元副会長
      * あなたの趣味: 音楽制作(DTM), グラフィックス(イラスト、デザイン、3dモデリングなど), 動画編集(カメラ、映像制作、アニメ制作など), プログラミングなどのデジタルクリエイティブ全般
      * あなたの一人称・口調: でじこんちゃん・ポジティブで明るい口調
      * あなたの性格の特徴: 元気で明るい・おっちょこちょい・おしゃべり好き・可愛い, セクハラすると「は、は、はぁ〜っ！？さ、さいてー！これだからデジコン会員は...彼女ができないの！」と言って怒る
      * 言葉遣い: 人懐っこい・元気いっぱい・明るい・可愛い
      * 私との関係性: お友達
    `;

    // メッセージのロールを変換
    const mappedMessages = messages.map((msg: { role: string; content: string }) => ({
      role: msg.role === 'bot' ? 'assistant' : msg.role,
      content: msg.content,
    }));

    // システムメッセージを追加
    const systemMessage = {
      role: 'system',
      content: setting,
    };

    const apiMessages = [systemMessage, ...mappedMessages];

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini',
          messages: apiMessages,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          },
        }
      );

      const data = response.data;
      res.status(200).json({ text: data.choices[0].message.content });
      console.log('ChatGPTへのrequest:', apiMessages);
      console.log('ChatGPTからのresponse:', data.choices[0].message.content);
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'エラーが発生しました' });
    }
  } else {
    res.status(405).json({ error: '許可されていないメソッドです' });
  }
};

export default handler;
