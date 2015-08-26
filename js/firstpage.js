/**
 * Created by czhao on 2015/8/24.
 */
angular.module("FirstPage",[])
    .controller("FirstCtrl",function($scope){
        $scope.num1={
            question:"This is question",

            answers:[
                {option:"A:I am a man",done:false},
                {option:"B:I am a woman",done:false},
                {option:"C:I am superman",done:false},
                {option:"D:I am a pig",done:false}
            ]

        };
        $scope.num2={
            question:"This is question",

            answers:[
                {option:"A:I am a man",done:false},
                {option:"B:I am a woman",done:false},
                {option:"C:I am superman",done:false},
                {option:"D:I am a pig",done:false}
            ]

        };
        $scope.num3={
            question:"This is question",

            answers:[
                {option:"A:I am a man",done:false},
                {option:"B:I am a woman",done:false},
                {option:"C:I am superman",done:false},
                {option:"D:I am a pig",done:false}
            ]

        };
        $scope.num4={
            question:"This is question",

            answers:[
                {option:"A:I am a man",done:false},
                {option:"B:I am a woman",done:false},
                {option:"C:I am superman",done:false},
                {option:"D:I am a pig",done:false}
            ]

        };
        $scope.num5={
            question:"This is question",

            answers:[
                {option:"A:I am a man",done:false},
                {option:"B:I am a woman",done:false},
                {option:"C:I am superman",done:false},
                {option:"D:I am a pig",done:false}
            ]

        };
        $scope.num6={
            question:"This is question",

            answers:[
                {option:"A:I am a man",done:false},
                {option:"B:I am a woman",done:false},
                {option:"C:I am superman",done:false},
                {option:"D:I am a pig",done:false}
            ]

        };
        $scope.num7={
            question:"This is question",

            answers:[
                {option:"A:I am a man",done:false},
                {option:"B:I am a woman",done:false},
                {option:"C:I am superman",done:false},
                {option:"D:I am a pig",done:false}
            ]

        };
        $scope.num8={
            question:"This is question",

            answers:[
                {option:"A:I am a man",done:false},
                {option:"B:I am a woman",done:false},
                {option:"C:I am superman",done:false},
                {option:"D:I am a pig",done:false}
            ]

        };
        $scope.num9={
            question:"This is question",

            answers:[
                {option:"A:I am a man",done:false},
                {option:"B:I am a woman",done:false},
                {option:"C:I am superman",done:false},
                {option:"D:I am a pig",done:false}
            ]

        };
        $scope.num10={
            question:"This is question",

            answers:[
                {option:"A:I am a man",done:false},
                {option:"B:I am a woman",done:false},
                {option:"C:I am superman",done:false},
                {option:"D:I am a pig",done:false}
            ]
        };

        $scope.num11={
            question:"This is question",

            answers:[
                {option:"A:I am a man",done:false},
                {option:"B:I am a woman",done:false},
                {option:"C:I am superman",done:false},
                {option:"D:I am a pig",done:false}
            ]
        };

        $scope.num12={
            question:"This is question",

            answers:[
                {option:"A:I am a man",done:false},
                {option:"B:I am a woman",done:false},
                {option:"C:I am superman",done:false},
                {option:"D:I am a pig",done:false}
            ]
        };

        $scope.num13={
            question:"This is question",

            answers:[
                {option:"A:I am a man",done:false},
                {option:"B:I am a woman",done:false},
                {option:"C:I am superman",done:false},
                {option:"D:I am a pig",done:false}
            ]
        };

        $scope.num14={
            question:"This is question",

            answers:[
                {option:"A:I am a man",done:false},
                {option:"B:I am a woman",done:false},
                {option:"C:I am superman",done:false},
                {option:"D:I am a pig",done:false}
            ]
        };

        $scope.num15={
            question:"This is question",

            answers:[
                {option:"A:I am a man",done:false},
                {option:"B:I am a woman",done:false},
                {option:"C:I am superman",done:false},
                {option:"D:I am a pig",done:false}
            ]
        };

        $scope.num16={
            question:"This is question",

            answers:[
                {option:"A:I am a man",done:false},
                {option:"B:I am a woman",done:false},
                {option:"C:I am superman",done:false},
                {option:"D:I am a pig",done:false}
            ]
        };

        $scope.num17={
            question:"This is question",

            answers:[
                {option:"A:I am a man",done:false},
                {option:"B:I am a woman",done:false},
                {option:"C:I am superman",done:false},
                {option:"D:I am a pig",done:false}
            ]
        };

        $scope.num18={
            question:"This is question",

            answers:[
                {option:"A:I am a man",done:false},
                {option:"B:I am a woman",done:false},
                {option:"C:I am superman",done:false},
                {option:"D:I am a pig",done:false}
            ]
        };

        $scope.num19={
            question:"This is question",

            answers:[
                {option:"A:I am a man",done:false},
                {option:"B:I am a woman",done:false},
                {option:"C:I am superman",done:false},
                {option:"D:I am a pig",done:false}
            ]
        };

        $scope.num20={
            question:"This is question",

            answers:[
                {option:"A:I am a man",done:false},
                {option:"B:I am a woman",done:false},
                {option:"C:I am superman",done:false},
                {option:"D:I am a pig",done:false}
            ]
        };


        $scope.submit1=function() {
            var count=0;

            angular.forEach($scope.num1.answers, function (answer) {
                if (answer.done) {
                    if(answer.option=="C:I am superman"){
                        count++
                    }
                }
            });

            angular.forEach($scope.num2.answers, function (answer) {
                if (answer.done) {
                    if(answer.option=="C:I am superman"){
                        count++
                    }
                }
            });

            angular.forEach($scope.num3.answers, function (answer) {
                if (answer.done) {
                    if(answer.option=="C:I am superman"){
                        count++
                    }
                }
            });

            angular.forEach($scope.num4.answers, function (answer) {
                if (answer.done) {
                    if(answer.option=="C:I am superman"){
                        count++
                    }
                }
            });

            angular.forEach($scope.num5.answers, function (answer) {
                if (answer.done) {
                    if(answer.option=="C:I am superman"){
                        count++
                    }
                }
            });

            sessionStorage["count"] = count;
            document.location.href = "secondpage.html";

        };

        $scope.submit2a=function(){
            document.location.href = "firstpage.html";
        };
        $scope.submit2b=function() {
            var count=0;

            angular.forEach($scope.num6.answers, function (answer) {
                if (answer.done) {
                    if(answer.option=="C:I am superman"){
                        count++
                    }
                }
            });

            angular.forEach($scope.num7.answers, function (answer) {
                if (answer.done) {
                    if(answer.option=="C:I am superman"){
                        count++
                    }
                }
            });

            angular.forEach($scope.num8.answers, function (answer) {
                if (answer.done) {
                    if(answer.option=="C:I am superman"){
                        count++
                    }
                }
            });

            angular.forEach($scope.num9.answers, function (answer) {
                if (answer.done) {
                    if(answer.option=="C:I am superman"){
                        count++
                    }
                }
            });

            angular.forEach($scope.num10.answers, function (answer) {
                if (answer.done) {
                    if(answer.option=="C:I am superman"){
                        count++
                    }
                }
            });
            sessionStorage["count2"] = count;
            document.location.href = "thirdpage.html";
            //alert(count);

        };


        $scope.submit3a=function(){
            document.location.href = "secondpage.html";
        };
        $scope.submit3b=function() {
            var count=0;

            angular.forEach($scope.num11.answers, function (answer) {
                if (answer.done) {
                    if(answer.option=="C:I am superman"){
                        count++
                    }
                }
            });

            angular.forEach($scope.num12.answers, function (answer) {
                if (answer.done) {
                    if(answer.option=="C:I am superman"){
                        count++
                    }
                }
            });

            angular.forEach($scope.num13.answers, function (answer) {
                if (answer.done) {
                    if(answer.option=="C:I am superman"){
                        count++
                    }
                }
            });

            angular.forEach($scope.num14.answers, function (answer) {
                if (answer.done) {
                    if(answer.option=="C:I am superman"){
                        count++
                    }
                }
            });

            angular.forEach($scope.num15.answers, function (answer) {
                if (answer.done) {
                    if(answer.option=="C:I am superman"){
                        count++
                    }
                }
            });
            sessionStorage["count3"] = count;
            document.location.href = "fourthpage.html";
            //alert(count);

        };


        $scope.submit4a=function() {
            document.location.href = "thirdpage.html";
        };
        $scope.submit4b=function() {
            var count = 0;

            angular.forEach($scope.num16.answers, function (answer) {
                if (answer.done) {
                    if(answer.option=="C:I am superman"){
                        count++
                    }
                }
            });

            angular.forEach($scope.num17.answers, function (answer) {
                if (answer.done) {
                    if(answer.option=="C:I am superman"){
                        count++
                    }
                }
            });

            angular.forEach($scope.num18.answers, function (answer) {
                if (answer.done) {
                    if(answer.option=="C:I am superman"){
                        count++
                    }
                }
            });

            angular.forEach($scope.num19.answers, function (answer) {
                if (answer.done) {
                    if(answer.option=="C:I am superman"){
                        count++
                    }
                }
            });

            angular.forEach($scope.num20.answers, function (answer) {
                if (answer.done) {
                    if(answer.option=="C:I am superman"){
                        count++
                    }
                }
            });

            sessionStorage["count4"] = count;

            count=parseInt(sessionStorage["count4"])+parseInt(sessionStorage["count3"])+parseInt(sessionStorage["count2"])+parseInt(sessionStorage["count"]);

            alert(count);


        };
        });