$(document).ready(function () {
  var quiz = [{
      id: 1,
      visible: true,
      title: "1. Как давно вы были в отпуске?",
      required: true,
      group_answers: false,
      answers: [{
          id: "q1_a1",
          title: "только вернулся",
          value: 0,
        },
        {
          id: "q1_a2",
          title: "в прошлом году",
          value: 1,
        },
        {
          id: "q1_a3",
          title: "даже не вспомню",
          value: 2,
        },
      ],
    },
    {
      id: 2,
      visible: false,
      title: "2. Утром вы просыпаетесь с мыслью:",
      required: true,
      group_answers: false,
      answers: [{
          id: "q2_a1",
          title: "еще 5 минут…",
          value: 0,
        },
        {
          id: "q2_a2",
          title: "кофе и снова в бой!",
          value: 1,
        },
        {
          id: "q2_a3",
          title: "сегодня не суббота? я так не играю(( ",
          value: 2,
        },
      ],
    },
    {
      id: 3,
      visible: false,
      title: "3. По дороге на работу вы обычно:",
      required: true,
      group_answers: false,
      answers: [{
          id: "q3_a1",
          title: "слушаете музыку, читаете",
          value: 0,
        },
        {
          id: "q3_a2",
          title: "отвечаете в рабочих мессенджерах и на звонки",
          value: 1,
        },
        {
          id: "q3_a3",
          title: "только просыпаетесь",
          value: 2,
        },
      ],
    },
    {
      id: 4,
      visible: false,
      title: "4. Как вы проводите свободное время?",
      required: true,
      group_answers: false,
      answers: [{
          id: "q4_a1",
          title: "хобби, семья, релакс",
          value: 0,
        },
        {
          id: "q4_a2",
          title: "“подчищаю” рабочие хвосты",
          value: 1,
        },
        {
          id: "q4_a3",
          title: "что есть такое время?",
          value: 2,
        },
      ],
    },

    {
      id: 5,
      visible: false,
      title: "5. Сегодня пятница, а у вас осталась пара невыполненных задач. Что будете делать?",
      required: true,
      group_answers: false,
      answers: [{
          id: "q5_a1",
          title: "перенесу на понедельник",
          value: 0,
        },
        {
          id: "q5_a2",
          title: "задержусь или доделаю на выходных",
          value: 1,
        },
        {
          id: "q5_a3",
          title: "у меня каждый день такая пятница",
          value: 2,
        },
      ],
    },

    {
      id: 6,
      visible: false,
      title: "6. На работе вас чаще:",
      required: true,
      group_answers: false,
      answers: [{
          id: "q6_a1",
          title: "хвалят и подбадривают",
          value: 0,
        },
        {
          id: "q6_a2",
          title: "особо не отмечают, каждый при своем деле",
          value: 1,
        },
        {
          id: "q6_a3",
          title: "ругают за косяки — последнее время напряженно",
          value: 2,
        },
      ],
    },

    {
      id: 7,
      visible: false,
      title: "7. Продолжите пословицу «делу время, …»:",
      required: true,
      group_answers: false,
      answers: [{
          id: "q7_a1",
          title: "а потехе — выходные",
          value: 0,
        },
        {
          id: "q7_a2",
          title: "и это время тянется бесконечно",
          value: 1,
        },
        {
          id: "q7_a3",
          title: "давайте лучше про «работа не волк»",
          value: 2,
        },
      ],
    },

    {
      id: 8,
      visible: false,
      title: "8. Ваши мысли вечером в воскресенье:",
      required: true,
      group_answers: false,
      answers: [{
          id: "q8_a1",
          title: "кино, кафе, друзья — ловить нужно каждую минуту",
          value: 0,
        },
        {
          id: "q8_a2",
          title: "а что у меня записано на понедельник?",
          value: 1,
        },
        {
          id: "q8_a3",
          title: "#@&?%!",
          value: 2,
        },
      ],
    },

    {
      id: 9,
      visible: false,
      title: "9. Коллега шлёт фото из отпуска. Вы:",
      required: true,
      group_answers: false,
      answers: [{
          id: "q9_a1",
          title: "лайкаете фото и просите подробности",
          value: 0,
        },
        {
          id: "q9_a2",
          title: "томно вздыхаете",
          value: 1,
        },
        {
          id: "q9_a3",
          title: "был в сети 10 минут назад..",
          value: 2,
        },
      ],
    },

    {
      id: 10,
      visible: false,
      title: "10. Куда бы вы хотели отправиться прямо сейчас?",
      required: true,
      group_answers: false,
      answers: [{
          id: "q10_a1",
          title: "вперёд, навстречу приключениям...",
          value: 0,
        },
        {
          id: "q10_a2",
          title: "на дачу, там поле непаханное",
          value: 1,
        },
        {
          id: "q10_a3",
          title: "туда, где можно выспаться",
          value: 2,
        },
      ],
    },

    {
      id: 11,
      visible: false,
      title: "11. На что вы готовы ради внепланового отпуска?",
      required: true,
      group_answers: false,
      answers: [{
          id: "q11_a1",
          title: "поработать пару выходных",
          value: 0,
        },
        {
          id: "q11_a2",
          title: "а что вы предложите?",
          value: 1,
        },
        {
          id: "q11_a3",
          title: "такое еще не придумали",
          value: 2,
        },
      ],
    },

    {
      id: 12,
      visible: false,
      title: "12. Вам дали отпуск! Уже в первый день отдыха вы:",
      required: true,
      group_answers: false,
      answers: [{
          id: "q12_a1",
          title: " выложу тысячу сторис с пляжа",
          value: 0,
        },
        {
          id: "q12_a2",
          title: "буду поглядывать в рабочую почту и чат, мало ли)",
          value: 1,
        },
        {
          id: "q12_a3",
          title: "пропаду со всех радаров",
          value: 2,
        },
      ],
    },

    {
      id: 13,
      visible: false,
      title: "Супер! Вы нашли силы пройти тест до конца)",
      required: true,
      group_answers: false,
      answers: [],
    },
  ];

  $.each(quiz, function (index, quiz) {
    var questionIndex = this.id;
    $(
      '<div class="quiz-item" id="quiz-item-' +
      this.id +
      '"><div class="question-title">' +
      this.title +
      " " +
      "</div> <div class='question-answers'>   <div class='question-grouped-answers'><div class='question-group-0'></div> <div class='question-group-1'></div> <div class='question-group-2'></div> <div class='question-group-3'></div> <div class='question-group-4'></div> <div class='question-group-5'></div><div class='question-group-6'></div><div class='question-group-7'></div><div class='question-group-8'></div><div class='question-group-9'></div><div class='question-group-10'></div><div class='question-group-11'></div><div class='question-group-12'></div></div>   </div> </div>"
    ).appendTo("#dd-quiz-do-i-have-a-concussion");

    $(".dd-continue-container").remove();

    $.each(this.answers, function (index, value) {
      var inputType = "radio";

      if (quiz.group_answers == false) {
        $(
          '<div class="question-answer"><input required="' +
          quiz.required +
          '" value="' +
          this.value +
          '" type="' +
          inputType +
          '" name="question_' +
          questionIndex +
          '" id="' +
          this.id +
          '" /> <label for="' +
          this.id +
          '">' +
          this.title +
          "</label></div>"
        ).appendTo("#quiz-item-" + questionIndex + " .question-answers");
      }
    });
  });

  $.each($(".quiz-item"), function (index) {
    index++;
    if (index !== 13) {
      $(
        '<div class="dd-continue-container"><button type="button" class="continue" data-id="' +
        index +
        '">Следующий ворос</button></div>'
      ).appendTo($(this));
    }
  });

  var arrA = [];
  var arrB = [];
  var arrC = [];

  $(document).on("click", ".dd-continue-container button", function (e) {
    var selectedIndex = $(this).attr("data-id") - 1;

    var atleastOneAnswerIsChecked = false;

    if (
      $(this)
      .closest(".quiz-item")
      .find(".question-answers")
      .has("input:checked").length > 0
    ) {
      atleastOneAnswerIsChecked = true;
    } else {
      atleastOneAnswerIsChecked = false;
    }

    if (
      quiz[selectedIndex].required == true &&
      atleastOneAnswerIsChecked == false
    ) {
      alert("Please select an answer before continuing.");
      return;
    }

    quiz[selectedIndex].visible = false;

    $.each($(".quiz-item"), function (index) {
      if (index !== 13) {
        quiz[selectedIndex + 1].visible = true;
      }
    });

    $.each(quiz, function () {
      if (this.visible == false) {
        $("#quiz-item-" + this.id).slideUp(444);
      } else {
        $("#quiz-item-" + this.id).slideDown(444);
      }
    });
    //

    var val = +$(
      '[name="question_' + quiz[selectedIndex].id + '"]:checked'
    ).val();

    // arr.push(val);
    // count = arr.reduce(function (a, b) {
    //   return a + b;
    // });

    if (val == 0) {
      arrA.push(val);
    } else if (val == 1) {
      arrB.push(val);
    } else if (val == 2) {
      arrC.push(val);
    }
    console.log(arrA, arrB, arrC);

    //
  });

  $('<button type="button" class="quiz-submit">Узнать результат</button>').appendTo(
    "#quiz-item-13"
  );

  $(
    '<div id="quiz-result"><div id="quiz-result-content"></div></div>'
  ).appendTo("#dd-quiz-do-i-have-a-concussion");

  // вывод результата теста

  $("body").on("click", "button.quiz-submit", function () {
    $("#quiz-result").slideDown(444);
    $("#quiz-result #quiz-result-content").text("");

    if (arrA.length >= arrB.length && arrA.length >= arrC.length) {
      $("<div class='result'><p class='quiz-text'><b>Так держать!</b><br>Вы умеете находить баланс между работой и жизнью. И отдыхать по полной!</p><img class='resalt-image glasses-image' src='./image/glasses.png'><button type='button' class='quiz-submit-reboot'>Пройти тест еще раз </button></div>").appendTo(
        "#quiz-result-content"
      );
    } else if (arrB.length > arrA.length && arrB.length >= arrC.length) {
      $("<div class='result'><p class='quiz-text'>Нельзя жить одной работой! Чаще встречайтесь с друзьями, найдите хобби, попробуйте медитации. И в конце концов позвольте себе полноценный отпуск!</p><img class='resalt-image bag-image' src='./image/bag.png'><button type='button' class='quiz-submit-reboot'>Пройти тест еще раз </button></div>").appendTo(
        "#quiz-result-content"
      );
    } else {
      $("<div class='result'><p class='quiz-text'>Так много работать нельзя! Возьмите выходные, чтобы отлежаться, или отправьтесь в небольшую поездку. Если усталость не уйдет — стоит поискать причину. Возможно, дело в самой работе либо в вашем отношении к ней. </p><img class='resalt-image car-image' src='./image/car.png'><button type='button' class='quiz-submit-reboot'>Пройти тест еще раз </button></div>").appendTo(
        "#quiz-result-content"
      );
    }
  });

  // вывод результата теста

  // пройти тест еще раз

  $("body").on("click", "button.quiz-submit-reboot", function () {
    location.reload();
  });

  // пройти тест еще раз



  $(
    "#quiz-item-2, #quiz-item-3, #quiz-item-4, #quiz-item-5, #quiz-item-6, #quiz-item-7, #quiz-item-8, #quiz-item-9, #quiz-item-10, #quiz-item-11, #quiz-item-12, #quiz-item-13, #quiz-result"
  ).hide();



});



