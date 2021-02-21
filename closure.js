function stopWatch(){
    let count = 0;
    return function(){
        count ++;
        return count;
    }
}
const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());      //NOTE কোন একটা ফাংশন এর ভিতরে যদি একটা ফাংশন থাকে ওই সেকেন্ড ফাংশন টার ভিতরে পৌঁছে তাকে যদি আমরা রিটার্ন করি, 
// অথবা ভিতরে ইউজ করি তাইলে একটা ইনভারমেন্ট তৈরি করে এবং সে হচ্ছে নিজেরা হচ্ছে এক্সটার্নাল ভেরিয়েবলের রেফারেন্স রেখে দেয় এটা কেই closure বলে। 

//NOTE If there is a function inside a function, if we return it inside the second function or if we use it inside,
//  it creates an environment and that is itself called the reference letter of the external variable.

// NOTE learning source: https://web.programming-hero.com/course/video/restart2-23-8-closure-encapsulation-private-variable-