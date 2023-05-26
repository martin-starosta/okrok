jQuery(document).ready(function ($) {
    var arrImages = [];
    var arrImagesEl = [];

    var uvodEl = document.getElementById("uvod");
	var boureEl = document.getElementById("boure");
	var bleskEl = document.getElementById("blesk");  	
	var sopkaEl = document.getElementById("sopka");	
	var vylevaniEl = document.getElementById("vylevani");
	var repairEl = document.getElementById("zalepeni");
	var boomEl = document.getElementById("boom");
	var iceEl = document.getElementById("ice");
	var musicEl = document.getElementById("music");
	var winEl = document.getElementById("music-win");
	var loseEl = document.getElementById("music-lose");

    function preload(arrayOfImages) {
        var counter = 0;
        var arrayLen = 13;
        $(arrayOfImages).each(function (index) {
            $('<img />')
                .attr('src', arrayOfImages[index])
                .on('load', onComplete(index, arrayLen, arrayOfImages[index]));
        });

    } 
  

    function onComplete(i, arrayLen, src) {
        arrImages.push(src);
        $("#preload-image").append('<img src="img/banner.jpg" alt="img-preload" />');


        if (arrayLen == i) {
            /// odstran preloader obrazku
            setTimeout(function () { $("#preload-image").html(""); }, 2000);
            $(arrImages).each(function (index) {
                var imageEl = '<img src="' + arrImages[index] + '" alt="img-' + index + '" />';
                arrImagesEl.push(imageEl);

            });


            //$("#layer0").html('<img src="img/1-uvod.gif" alt="1-uvod.gif" />');
            $("#layer0").html('<img src="img/banner.jpg" alt="banner" />');

            $("#preloader").addClass("hidden");
            setTimeout(function () { $("#preloader").addClass("displayNone"); }, 1000);
            var layer1El = '<div class="clouds">' +
                '<img class="cloud cloud-1 btn" src="img/mrak-button-1.svg" alt="img-clouds" />' +
                '<img class="cloud cloud-2 btn" src="img/mrak-button-2.svg" alt="img-clouds" />' +
                '<img class="cloud cloud-3 btn" src="img/mrak-button-3.svg" alt="img-clouds" />' +
                '</div>';
            var layer1El2 = '<img src="img/1-uvod.gif" alt="uvod" />';


            $("#game #layer0").click(function () {
                $("#game #layer1a").html('<img src="img/textovy-uvod.jpg" alt="uvod" />');
                $("#layer0").addClass("hidden");
                setTimeout(function () { $("#layer0").addClass("displayNone"); }, 1000);
            });
        
            $("#game #layer1a").click(function () {
                uvodEl.play();
				$('#game .reload-game').removeClass("displayNone");
                $("#info #text1").addClass("visible");
                $("#info #text0").remove();
                $("#layer1").html(layer1El + layer1El2);
                $("#layer1a").addClass("hidden");
                setTimeout(function () { $("#layer1a").addClass("displayNone"); }, 1000);

                setTimeout(function () { $(".clouds").addClass("toLeft"); }, 3000);
                setTimeout(function () { $(".cloud-1").addClass("pulse"); }, 7000);
                setTimeout(function () { $(".cloud-2").addClass("pulse"); }, 7500);
                setTimeout(function () { $(".cloud-3").addClass("pulse"); }, 8000);

                $(".cloud-1").click(function () {
                    $("#layer2").html('<img src="img/2-boure-1-cycle.gif" alt="boure-1" />');
                    $("#info #text2 span p.var1").addClass("show");
                    $("#info #text2").addClass("visible");
                    $("#info #text1").removeClass("visible");
                    $("#layer1").addClass("hidden");
                    storm1();
                });

                $(".cloud-2").click(function () {
                    $("#layer2").html('<img src="img/3-boure-2-cycle.gif" alt="boure-2" />');
                    $("#info #text2 span p.var2").addClass("show");
                    $("#info #text2").addClass("visible");
                    $("#info #text1").removeClass("visible");
                    $("#layer1").addClass("hidden");
                    storm2();
                });

                $(".cloud-3").click(function () {
                    $("#layer2").html('<img src="img/4-boure-3-cycle.gif" alt="boure-3" />');
                    $("#info #text2 span p.var3").addClass("show");
                    $("#info #text2").addClass("visible");
                    $("#info #text1").removeClass("visible");
                    $("#layer1").addClass("hidden");
                    storm3();
                });
            });

            function storm1() {

                $("#info #text1").removeClass("visible");
                $("#info #text2").addClass("visible");
                $("#layer2").html('<img src="img/2-boure-1-cycle.gif" alt="boure-1" />');
               
                boureEl.play();
                uvodEl.pause();               

                var layer9El = '<div class="next"><img src="img/next-button.svg" alt="img-next" /></div>';

                setTimeout(function () {
                    $("#layer2").append(layer9El);
                    $("#layer1").addClass("displayNone");
                    $("#layer1").html("");
                    setNext(1);
                }, 3000);
            }


            function storm2() {

                $("#info #text1").removeClass("visible");
                $("#info #text2").addClass("visible");
                $("#layer2").html('<img src="img/3-boure-2-cycle.gif" alt="boure-2" />');

                boureEl.play();
                uvodEl.pause();

                $("#layer1").addClass("displayNone");
                var layer99El = '<div class="next"><img src="img/next-button.svg" alt="img-next" /></div>';
                setTimeout(function () {
                    $("#layer2").append(layer99El);
                    $("#layer1").addClass("displayNone");
                    setNext(2);
                }, 3000);

            }

            function storm3() {

                $("#info #text1").removeClass("visible");
                $("#info #text2").addClass("visible");
                $("#layer2").html('<img src="img/4-boure-3-cycle.gif" alt="boure-3" />');

                boureEl.play();
                uvodEl.pause();

                var layer99El = '<div class="next"><img src="img/next-button.svg" alt="img-next" /></div>';
                setTimeout(function () {
                    $("#layer2").append(layer99El);
                    $("#layer1").addClass("displayNone");
                    $("#layer1").html("");
                    setNext(3);
                }, 3000);
            }

            function setNext(par) {
                //$(".next img").addClass("pulse");
                $("#layer2 .next").addClass("visible");
                $(".next img").click(function () {
                    $("#info #text2").removeClass("visible");
                    $("#info #text3").addClass("visible");

                    $(".next img").unbind();
                    $("#layer2 .next").removeClass("visible");
                    setTimeout(function () { setNext2(par); }, 1500);

                });

            }

            function setNext2(par) {
                $("#layer2 .next").addClass("visible");
                $(".next img").click(function () {
					boureEl.pause();
					bleskEl.play();
                    $("#layer2").addClass("hidden");
                    $("#info #text3").removeClass("visible");
                    setTimeout(function () {
                        $("#layer2").addClass("displayNone");
                        $("#layer2").html("");
                    },
                        1000);
                    if (par == 1) {
                        $("#layer3").html('<img src="img/2-boure-1-zaver.gif" alt="boure-2" />');
                    } else if (par == 2) {
                        $("#layer3").html('<img src="img/3-boure-2-zaver.gif" alt="boure-2" />');
                    } else if (par == 3) {
                        $("#layer3").html('<img src="img/4-boure-3-zaver.gif" alt="boure-3" />');
                    }
                    setTimeout(function () { afterStorm(); }, 5000);
                });
            }


            function afterStorm() {
				
				uvodEl.play();
                bleskEl.pause();  
				
                $("#layer3").addClass("hidden");
                $("#info #text3").removeClass("visible");
                $("#info #text4").addClass("visible");
                $("#layer4").html('<img src="img/5-po-bouri-faze-1-cycle.gif" alt="po-bouri" />');
                var layer4El = '<div class="tape btn"><img src="img/isolepa-pulse.gif" alt="isolepa" /></div>';
                setTimeout(function () {
                    $("#layer3").addClass("displayNone");
                    $("#layer3").html("");
                    $("#layer4").append(layer4El);
                    $("#layer2").addClass("displayNone");
                    setTape();
                }, 3000);

                function setTape() {
                    $(".tape img").click(function () {
						$(this).remove();
						repairEl.play();
                        $("#layer2").html("");
                        $("#info #text4").addClass("visible");
                        $("#info #text3").removeClass("visible");
                        $("#layer5").html('<img src="img/5-po-bouri-faze-2.gif" alt="po-bouri" />');
                        setTimeout(function () {
                            $("#layer4").addClass("hidden");
                            $("#layer3").html("");
                        }, 500);
                        setTimeout(function () { sopka(); }, 4500);
                    });
                }
            }

           

            function sopka() {

                $("#layer6").html('<img src="img/6-sopka-a.gif" alt="sopka" />');
                $("#info #text4").removeClass("visible");
				
				uvodEl.pause();
                sopkaEl.play();
				boomEl.play();
				
                setTimeout(function () {
                    $("#layer5").addClass("hidden");
                }, 500);
                setTimeout(function () {
                    $("#layer5").addClass("displayNone");
                    $("#layer4").addClass("displayNone");
                    $("#layer5").html("");
                    $("#layer4").html("");
                    $("#layer4").addClass("hidden");
                    $("#layer5").addClass("hidden");
                    $("#info #text5").addClass("visible");
                    $("#layer6").html('<img src="img/6-sopka-fase-2-cycle.gif" alt="sopka" />');

                }, 5800);

                setTimeout(function () {
                    var layer6El = '<div class="vedro btn"><img src="img/vedro.gif" alt="vedro" /></div>';
                    $("#layer6").append(layer6El);
                    $("#layer6 .vedro").addClass("visible");
                    setVedro();
                }, 10000);
               

                function setVedro() {					
                    $(".vedro img").click(function () {
						vylevaniEl.play();                        
						sopkaEl.pause(); 
						$(this).remove();
                       
                        $("#info #text5").removeClass("visible");
                        $("#info #text6").addClass("visible");
                        $("#layer6").addClass("hidden");
                        $("#layer7").html('<img src="img/6-sopka-fase-3-cycle.gif" alt="sopka" />');	
                        setNextBtn();					
                    });

                    function setNextBtn(){
                        var layer7El = '<div class="next"><img src="img/next-button.svg" alt="img-next" /></div>';
                        setTimeout(function () {
                            $("#layer6").addClass("displayNone");
                            $("#layer6").html("");
                        }, 1000);

                        $("#layer7").append(layer7El);
                        $("#layer7 .next").addClass("visible");

                        $("#layer7 .next").click(function () {   
                            setMonster();
							$("#info #text6").removeClass("visible");
                        });                       
                    }
                }

            }

            function setMonster() {			

                $("#layer8").html('<img src="img/7-prisera-fase-1.gif" alt="prisera" />');
                $("#layer7").addClass("hidden");
				$("#info #text7").addClass("visible");
                vylevaniEl.pause();
				musicEl.play();

                setTimeout(function () {
					
                    $("#layer7").addClass("displayNone"); 
					$("#layer7").html(""); 

                }, 2000);

                setTimeout(function () {
                    $("#layer9").html('<img src="img/7-prisera-fase-2-cycle.gif" alt="prisera" />');
                    $("#layer7").addClass("displayNone");
                    $("#layer7").html("");
                    $("#layer8").addClass("hidden");
                    setTimeout(function () {
                        var layer9El = '<div class="tool"><img class="uvazek-text" src="img/uvazek.svg" alt="uvazek" /><div class="wrapper"><div class="btn1"><img class="number" src="img/nula.svg" alt="nula" /></div><div class="btn2"><img class="number" src="img/polovicni.svg" alt="polovicni" /></div><div class="btn3 disable"><img class="number" src="img/zkraceny.svg" alt="plny" /></div><div class="btn4 disable"><img class="number" src="img/plny.svg" alt="plny" /></div></div></div>'
                        $("#layer9").prepend(layer9El);
                        $("#layer9 .tool").addClass("visible");
                        $("#layer8").addClass("displayNone");

                        $(".tool .btn1").click(function () {
                            gameOver();
                        });
                        $(".tool .btn2").click(function () {
                            setMonster2();
                        });

                    }, 3000);
                }, 7000);


                function setMonster2() {
                    $("#layer10").html('<img src="img/7-prisera-polovicni-uvazek-uvod.gif" alt="prisera" />');
                    $("#layer9").addClass("hidden");
                    setTimeout(function () {
                        $("#layer9").addClass("displayNone");
                        $("#layer9").html("");
                    }, 1000);

                    setTimeout(function () {
                        $("#layer11").html('<img src="img/7-prisera-polovicni-uvazek-cycle.gif" alt="prisera" />');
                        $("#layer10 ").addClass("hidden");
						
						var layer11El = '<div class="tool"><img class="uvazek-text" src="img/uvazek.svg" alt="uvazek" /><div class="wrapper"><div class="btn1"><img class="number" src="img/nula.svg" alt="nula" /></div><div class="btn2 active"><img class="number" src="img/polovicni.svg" alt="polovicni" /></div><div class="btn3"><img class="number" src="img/zkraceny.svg" alt="plny" /></div><div class="btn4 disable"><img class="number" src="img/plny.svg" alt="plny" /></div></div></div>'
						
                        $("#layer11").prepend(layer11El);
                        $("#layer11 .tool").addClass("visible");

                        $(".tool .btn1").click(function () {
                            gameOver();
                        });

                        $(".tool .btn3").click(function () {
                            setMonster3();
                        });
                    }, 3000);
                    setTimeout(function () {
                        $("#layer10 ").addClass("displayNone");
                        $("#layer10 ").html("");
                    }, 4000);
                }

                function setMonster3() {
                    $("#layer12").html('<img src="img/7-prisera-zkraceny-uvazek-uvod.gif" alt="prisera" />');

                    $("#layer11").addClass("hidden");
                    $("#layer10").addClass("displayNone");
                    $("#layer10").html("");

                    setTimeout(function () {
                        $("#layer11").addClass("displayNone");
                        $("#layer11").html("");
                    }, 1000);

                    setTimeout(function () {
                        $("#layer13").html('<img src="img/7-prisera-zkraceny-uvazek-cycle.gif" alt="prisera" />');
						
						var layer13El = '<div class="tool"><img class="uvazek-text" src="img/uvazek.svg" alt="uvazek" /><div class="wrapper"><div class="btn1"><img class="number" src="img/nula.svg" alt="nula" /></div><div class="btn2 disable"><img class="number" src="img/polovicni.svg" alt="polovicni" /></div><div class="btn3 active"><img class="number" src="img/zkraceny.svg" alt="plny" /></div><div class="btn4"><img class="number" src="img/plny.svg" alt="plny" /></div></div></div>'
						
                        $("#layer13").prepend(layer13El);
                        $("#layer13 .tool").addClass("visible");
                        $("#layer12").addClass("hidden");

                        $(".tool .btn1").click(function () {
                            gameOver();
                        });

                        $(".tool .btn4").click(function () {
                            setMonster4();
                        });

                    }, 3000);

                    setTimeout(function () {
                        $("#layer12 ").addClass("displayNone");
                        $("#layer12 ").html("");
                    }, 4000);
                }


                function setMonster4() {
                    $("#layer14").html('<img src="img/7-prisera-plny-uvazek-uvod.gif" alt="prisera" />');
					
					var layer14El = '<div class="tool"><img class="uvazek-text" src="img/uvazek.svg" alt="uvazek" /><div class="wrapper"><div class="btn1"><img class="number" src="img/nula.svg" alt="nula" /></div><div class="btn2 disable"><img class="number" src="img/polovicni.svg" alt="polovicni" /></div><div class="btn3 disable"><img class="number" src="img/zkraceny.svg" alt="plny" /></div><div class="btn4 active"><img class="number" src="img/plny.svg" alt="plny" /></div></div></div>'
					
                    $("#layer14").prepend(layer14El);
                    $("#layer13").addClass("hidden");

                    $("#layer11").addClass("hidden");
                    setTimeout(function () {
                        $("#layer12").addClass("displayNone");
                        $("#layer12").html("");
                    }, 1000);

                    $(".tool .btn1").click(function () {
                        gameOver();
                    });

                    setTimeout(function () {
                        setLedovec();
                    }, 3000);
                }

            }

            function gameOver() {
				musicEl.pause();
				loseEl.play();
                $("#layer9").addClass("hidden displayNone");
				$("#layer10").addClass("hidden displayNone");
				$("#layer11").addClass("hidden displayNone");
				$("#layer12").addClass("hidden displayNone");
				$("#layer13").addClass("hidden displayNone");
				$("#layer14").addClass("hidden displayNone");
				$("#layer7").removeClass("hidden displayNone");
				$("#layer6").removeClass("hidden displayNone");
                $("#layer7").html('<img src="img/7-prisera-uvazek-nula.gif" alt="konec" />');
                $("#info #text12").addClass("visible");
                setTimeout(function () {
                    $("#layer6").html('<img src="img/konec-b.gif" alt="konec" />');                  

                    $('#game').addClass("playAgain");
                    $('#game').on('click', function() {                         
                        window.location.reload(true);
                    });	

                }, 3500);
            }

            function setLedovec() {
				musicEl.pause();
				iceEl.play();
				$("#info #text7").removeClass("visible");
                $("#layer13").addClass("displayNone");
                $("#layer13").html("");
                $("#layer14").addClass("hidden");
                $("#layer15").html('<img src="img/8-ledovec-2.gif" alt="prisera" />');
                setTimeout(function () {
                    afterStorm2();
                }, 6500);
            }

            function afterStorm2() {
				iceEl.pause();
				uvodEl.play();
				
				$("#info #text8").addClass("visible");
                $("#layer16").html('<img src="img/repeat/5-po-bouri-faze-1-cycle.gif" alt="po-bouri" />');
                var layer16Ela = '<div class="tape btn"><img src="img/isolepa-pulse-disable.gif" alt="isolepa" /></div>';
				
				var layer16Elb = '<div class="tool"><img class="uvazek-text" src="img/uvazek.svg" alt="uvazek" /><div class="wrapper"><div class="btn1"><img class="number" src="img/nula.svg" alt="nula" /></div><div class="btn2"><img class="number" src="img/polovicni.svg" alt="polovicni" /></div><div class="btn3 disable"><img class="number" src="img/zkraceny.svg" alt="plny" /></div><div class="btn4 active"><img class="number" src="img/plny.svg" alt="plny" /></div></div></div>'
				

                $("#layer15").addClass("hidden");

                setTimeout(function () {
                    $("#layer15").addClass("displayNone");
                    $("#layer15").html("");
                    $("#layer16").append(layer16Ela);
                    $("#layer16").append(layer16Elb);
                    $("#layer16 .tool").addClass("visible");
                    $("#layer14").addClass("displayNone");
                    $("#layer14").html("");
					
					$(".tool .btn1").click(function () {
                        gameOver3();
                    });

                    $(".tool .btn2").click(function () {
                        $(this).addClass("active");
						$("#info #text8").removeClass("visible");
						$("#info #text9").addClass("visible");
                        $("#layer16 .tool").removeClass("visible");
                        $(".tool .btn4").removeClass("active");
                        $(".tool .btn4").addClass("disable");
                        $("#layer16 .tape").html('<img src="img/isolepa-pulse.gif" alt="isolepa" />');
                        setTape();
                        function setTape() {
                            $(".tape img").click(function () {
								$(this).remove();
								repairEl.play();
                                $("#layer17").html('<img src="img/repeat/5-po-bouri-faze-2.gif" alt="po-bouri" />');
                                setTimeout(function () {
                                    $("#layer16").addClass("hidden");
                                }, 500);

                                setTimeout(function () {
                                    setMonsterRepeat();
                                }, 5000);
                            });
                        }
                    });

                }, 3000);
				
				function gameOver3() {
				musicEl.pause();
				loseEl.play();
					$("#layer16").addClass("hidden displayNone");
					$("#info #text12").addClass("visible");
					$("#layer6").removeClass("hidden displayNone");
					$("#layer6").html('<img src="img/konec-b.gif" alt="konec" />');                  

					setTimeout(function () {                  
						$('#game').addClass("playAgain");
						$('#game').on('click', function() {                         
							window.location.reload(true);
						});	

					}, 3500);
					
				}

            }

            function setMonsterRepeat() {
				musicEl.load();
				musicEl.play();
				uvodEl.pause();
				$("#info #text9").removeClass("visible");
                $("#layer17").addClass("hidden");
                $("#layer16").addClass("displayNone");
                $("#layer16").html("");
                $("#layer18").html('<img src="img/repeat/7-prisera-fase-1.gif" alt="prisera" />');

                setTimeout(function () {
					
					$("#info #text10").addClass("visible");
                    $("#layer19").html('<img src="img/7-prisera-fase-2-cycle.gif" alt="prisera" />');
                    $("#layer17").addClass("displayNone");
                    $("#layer17").html("");
                    $("#layer18").addClass("hidden");
                    setTimeout(function () {
						
						var layer19El = '<div class="tool"><img class="uvazek-text" src="img/uvazek.svg" alt="uvazek" /><div class="wrapper"><div class="btn1"><img class="number" src="img/nula.svg" alt="nula" /></div><div class="btn2"><img class="number" src="img/polovicni.svg" alt="polovicni" /></div><div class="btn3 disable"><img class="number" src="img/zkraceny.svg" alt="plny" /></div><div class="btn4 disable"><img class="number" src="img/plny.svg" alt="plny" /></div></div></div>'
						
                        $("#layer19").prepend(layer19El);
                        $("#layer19 .tool").addClass("visible");
                        $("#layer18").addClass("displayNone");

                        $(".tool .btn1").click(function () {
                            gameOver2();
                        });
                        $(".tool .btn2").click(function () {
                            setMonsterRepeat2();
                        });

                    }, 3000);
                }, 8000);


                function setMonsterRepeat2() {
                    $("#layer20").html('<img src="img/repeat/7-prisera-polovicni-uvazek-uvod.gif" alt="prisera" />');
                    $("#layer19").addClass("hidden");

                    setTimeout(function () {
                        $("#layer19").addClass("displayNone");
                        $("#layer19").html("");
                    }, 1000);

                    setTimeout(function () {
                        $("#layer21").html('<img src="img/7-prisera-polovicni-uvazek-cycle.gif" alt="prisera" />');
                        $("#layer20 ").addClass("hidden");
						
						var layer21El = '<div class="tool"><img class="uvazek-text" src="img/uvazek.svg" alt="uvazek" /><div class="wrapper"><div class="btn1"><img class="number" src="img/nula.svg" alt="nula" /></div><div class="btn2 active"><img class="number" src="img/polovicni.svg" alt="polovicni" /></div><div class="btn3"><img class="number" src="img/zkraceny.svg" alt="plny" /></div><div class="btn4 disable"><img class="number" src="img/plny.svg" alt="plny" /></div></div></div>'
						
                        $("#layer21").prepend(layer21El);
                        $("#layer21 .tool").addClass("visible");

                        $(".tool .btn1").click(function () {
                            gameOver2();
                        });

                        $(".tool .btn3").click(function () {
                            setMonsterRepeat3();
                        });
                    }, 3000);
                    setTimeout(function () {
                        $("#layer20 ").addClass("displayNone");
                        $("#layer20 ").html("");
                    }, 4000);
                }

                function setMonsterRepeat3() {
                    $("#layer22").html('<img src="img/repeat/7-prisera-zkraceny-uvazek-uvod.gif" alt="prisera" />');

                    $("#layer21").addClass("hidden");
                    $("#layer20").addClass("displayNone");
                    $("#layer20").html("");

                    setTimeout(function () {
                        $("#layer21").addClass("displayNone");
                        $("#layer21").html("");
                    }, 1000);

                    setTimeout(function () {
                        $("#layer23").html('<img src="img/7-prisera-zkraceny-uvazek-cycle.gif" alt="prisera" />');

						var layer23El = '<div class="tool"><img class="uvazek-text" src="img/uvazek.svg" alt="uvazek" /><div class="wrapper"><div class="btn1"><img class="number" src="img/nula.svg" alt="nula" /></div><div class="btn2 disable"><img class="number" src="img/polovicni.svg" alt="polovicni" /></div><div class="btn3 active"><img class="number" src="img/zkraceny.svg" alt="plny" /></div><div class="btn4"><img class="number" src="img/plny.svg" alt="plny" /></div></div></div>'
						
                        $("#layer23").prepend(layer23El);
                        $("#layer23 .tool").addClass("visible");
                        $("#layer22").addClass("hidden");

                        $(".tool .btn1").click(function () {
                            gameOver2();
                        });

                        $(".tool .btn4").click(function () {
                            setMonsterRepeat4();
                        });

                    }, 3000);

                    setTimeout(function () {
                        $("#layer22 ").addClass("displayNone");
                        $("#layer22 ").html("");
                    }, 4000);
                }


                function setMonsterRepeat4() {
                    $("#layer24").html('<img src="img/repeat/7-prisera-plny-uvazek-uvod.gif" alt="prisera" />');
					
					var layer24El = '<div class="tool"><img class="uvazek-text" src="img/uvazek.svg" alt="uvazek" /><div class="wrapper"><div class="btn1"><img class="number" src="img/nula.svg" alt="nula" /></div><div class="btn2 disable"><img class="number" src="img/polovicni.svg" alt="polovicni" /></div><div class="btn3 disable"><img class="number" src="img/zkraceny.svg" alt="plny" /></div><div class="btn4 active"><img class="number" src="img/plny.svg" alt="plny" /></div></div></div>'
					
                    $("#layer24").prepend(layer24El);
                    $("#layer23").addClass("hidden");

                    $("#layer21").addClass("hidden");
                    setTimeout(function () {
                        $("#layer22").addClass("displayNone");
                        $("#layer22").html("");
                    }, 1000);

                    $(".tool .btn1").click(function () {
                        gameOver2();
                    });

                    setTimeout(function () {
                        thisIsEnd();
                    }, 3000);
                }
				
				function gameOver2() {
				musicEl.pause();
				loseEl.play();
					$("#layer18").addClass("hidden displayNone");
					$("#layer19").addClass("hidden displayNone");
					$("#layer20").addClass("hidden displayNone");
					$("#layer21").addClass("hidden displayNone");
					$("#layer22").addClass("hidden displayNone");
					$("#layer23").addClass("hidden displayNone");
					$("#layer7").removeClass("hidden displayNone");
					$("#layer6").removeClass("hidden displayNone");
					$("#layer7").html('<img src="img/7-prisera-uvazek-nula.gif" alt="konec" />');
					$("#info #text12").addClass("visible");
					setTimeout(function () {
						$("#layer6").html('<img src="img/konec-b.gif" alt="konec" />');                  

						$('#game').addClass("playAgain");
						$('#game').on('click', function() {                         
							window.location.reload(true);
						});	

					}, 3500);
				}
				
				

                function thisIsEnd() {
					winEl.play();
					musicEl.pause();
					$("#info #text10").removeClass("visible");
					$("#layer25").html('<img src="img/finalni-text.jpg" alt="text-vyhra" />');
					$("#layer23").addClass("hidden displayNone");
					$("#layer24").addClass("hidden displayNone");
					
					$("#game #layer25").click(function () {
						$("#info #text11").addClass("visible");
						$("#layer26").html('<img src="img/9-vyhra-cycle.gif" alt="vyhra" />');
						$("#layer25").addClass("hidden");
						setTimeout(function () { $("#layer25").addClass("displayNone"); }, 1000);
						
						setTimeout(function () {
							var layer16El = '<div class="next"><img src="img/reload-btn.svg" alt="reload" /></div>'
							$("#layer26").prepend(layer16El);
							$("#layer26 .next").addClass("visible");
							$('#layer26 .next img').on('click', function() {                         
								window.location.reload(true);
							});	
						}, 2000);
					});
					
					
					
                    
                }
            }

        }
    }

    preload([
        'img/banner.jpg',
        'img/1-uvod.gif',
        'img/2-boure-1-cycle.gif',
        'img/2-boure-1-zaver.gif',
        'img/3-boure-2-cycle.gif',
        'img/3-boure-2-zaver.gif',
        'img/4-boure-3-cycle.gif',
        'img/4-boure-3-zaver.gif',
        'img/5-po-bouri-faze-1-cycle.gif',
        'img/5-po-bouri-faze-2.gif',
		'img/repeat/5-po-bouri-faze-1-cycle.gif',
		'img/repeat/5-po-bouri-faze-2.gif',
        'img/6-sopka-a.gif',
        'img/6-sopka-fase-2-cycle.gif',
        'img/6-sopka-fase-3-cycle.gif',
        'img/7-prisera-fase-1.gif',
        'img/7-prisera-fase-2-cycle.gif',
        'img/7-prisera-polovicni-uvazek-cycle.gif',
        'img/7-prisera-polovicni-uvazek-uvod.gif',
        'img/7-prisera-zkraceny-uvazek-cycle.gif',
        'img/7-prisera-zkraceny-uvazek-uvod.gif',
		'img/7-prisera-plny-uvazek-uvod.gif',
        'img/repeat/7-prisera-fase-1.gif',
        'img/repeat/7-prisera-polovicni-uvazek-uvod.gif',
        'img/repeat/7-prisera-zkraceny-uvazek-uvod.gif',
		'img/repeat/7-prisera-plny-uvazek-uvod.gif',
        'img/mrak-button-1.svg',
        'img/mrak-button-2.svg',
        'img/mrak-button-3.svg',
        'img/isolepa-pulse.gif',
        'img/next-button.svg',
        'img/pracovni-uvazek-default.svg',
        'img/pracovni-uvazek-plny.svg',
        'img/pracovni-uvazek-polovicni.svg',
        'img/pracovni-uvazek-zkraceny.svg',
        'img/vedro.gif',
        'img/textovy-uvod.jpg',
        'img/8-ledovec-2.gif',
        'img/9-vyhra-cycle.gif',

    ]);



});