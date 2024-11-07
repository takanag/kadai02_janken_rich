
$(document).ready(function () {
    const text = "ミルキータ王国には「フォンデュの山」という神秘的な場所が存在します。この山の頂では、絶えず黄金のチーズが溶け出し、山全体を覆うように川となって流れています。古い伝説によれば、山の中心には「チーズの核」と呼ばれる秘宝が眠っており、それが溶けたチーズに無限の力を与えているといわれます。しかし、伝説のチーズが盗まれた今、フォンデュの山のバランスが崩れ、川が氾濫し、パンの木も枯れ始め、付近の生態系が危機に陥っています。王国を救うため、山の内部にある「チーズの核」を再起動し、世界に再び平和をもたらす旅に出る。冒険の続きは、あなたの決断にかかっています！";
    const typingSpeed = 50;  // 文字が表示される速度（ミリ秒）
    let index = 0;

    function type() {
        if (index < text.length) {
            $('#typing-text').append(text.charAt(index));
            index++;
            setTimeout(type, typingSpeed);
        }
    }

    type();  // タイピングエフェクトの開始
});

$(document).ready(function () {
    // ストーリーを管理するオブジェクト
    const story = {
        start: "ミルキータ王国を流れるチーズの川は濁流のように流れており、そのままでは渡れません。途中で巨大なパンの丸木橋を見つけますが、盗賊団が立ちはだかり、通行料を要求してきます。どうしますか？",
        a_1: "強盗団と戦いましたが、負けてしまいました。残念ながらフォンデュの山にはたどり着けませんでした。ゲームオーバーです。",
        b_1: "チーズを使って賄賂を渡し、安全にチーズの川を渡ることができました。山の中腹に差し掛かると、ラクレット・ドラゴンが溶けたチーズを吐いて襲いかかってきました。ドラゴンはチーズを吸収して力を増すため、チーズを使った攻撃では歯が立ちません。どうしますか？",
        a_2: "魔法のおかげでドラゴンは弱体化し、その隙に山の中腹を越えることができました。いよいよ山頂に着きました。山頂にある「チーズの核」は巨大な鍋の中に沈んでいますが、何者かの呪いで封印されています。呪いを解くためには、正しい儀式を行う必要があります。どのような儀式をしますか？",
        b_2: "パンの木でおびき寄せようとしましたが失敗し、ドラゴンの溶けたチーズの攻撃にやられてしまいました。残念ながらフォンデュの山にはたどり着けませんでした。ゲームオーバーです。",
        a_3: "儀式が成功しチーズの劣化が止まりました。王国は再び繁栄し、あなたは英雄として讃えられました！",
        b_3: "核を無理に再起動したことで山全体が崩壊し始めます。かろうじて脱出に成功するものの、フォンデュの山は二度と復活することなく、伝説のままとなります。あなたの行動は英雄的なものだったのか、それとも愚かだったのか…未来の冒険者たちが語り継ぐでしょう。",
    };

    // ストーリーの初期表示
    $("#story-text").text(story.start);

    // ボタンのクリックイベント
    $(".choice-button").on("click", function () {
        const choice = $(this).data("choice");

        // 選択によるストーリーの分岐
        if (choice === "left") {
            $("#left-image").attr('src', '/img/gameover.jpg');
            $("#story-text").text(story.a_1);
            $(".choice-button").eq(0).hide();  // 左のボタンを隠す
            $(".choice-button").eq(1).hide();  // 右のボタンを隠す
        } else if (choice === "right") {
            $("#left-image").attr('src', '/img/story_02.jpg');
            $("#story-text").text(story.b_1);
            $(".choice-button").eq(0).text("魔法でチーズの流れを止め、一時的に弱体化させる").data("choice", "stop");
            $(".choice-button").eq(1).text("山から持ち帰ったパンの木を使い、おびき寄せて封じ込める").show().data("choice", "tree");
        } else if (choice === "stop") {
            $("#left-image").attr('src', '/img/story_03.jpg');
            $("#story-text").text(story.a_2);
            $(".choice-button").eq(0).text("「伝説のチーズ」を用いて呪いを解く").data("choice", "legend");
            $(".choice-button").eq(1).text("核を無理やり再起動する").show().data("choice", "reboot");
        } else if (choice === "tree") {
            $("#left-image").attr('src', '/img/gameover.jpg');
            $("#story-text").text(story.b_2);
            $(".choice-button").hide();  // 選択肢を非表示にする
        } else if (choice === "legend") {
            $("#left-image").attr('src', '/img/story_04.jpg');
            $("#story-text").text(story.a_3);
            $(".choice-button").hide();  // 選択肢を非表示にする
        } else if (choice === "reboot") {
            $("#left-image").attr('src', '/img/reboot.jpg');
            $("#story-text").text(story.b_3);
            $(".choice-button").hide();  // 選択肢を非表示にする
    }

});
});

