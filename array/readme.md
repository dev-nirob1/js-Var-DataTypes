                    ## Array ##

# Array কিঃ

- Array হলো একটি Data structure যেখানে একই type বা ভিন্ন Type এর এক বা একাধিক value সংরক্ষন করা হয়।
  -Array এর ইলিমেন্টের position index দ্বারা চিহ্নিত থাকে। index সব সময় 0 থেকে শুরু হয়।
  -Array এর মধ্যে যতগুলো ইলিমেন্ট থাকে Array এর length তত হবে।
  -Array check করতে Array.isArray([]) method ব্যবহার করা হয়।

## Create Array##

একাধিক উপায়ে Array তৈরি করা যায়। এর মধ্যে প্রধান ২টি উপায় হলোঃ

- ১।Array Literal:
  `const arr = [10, 20, 30]
`

- 2.  new Array(constructor):
      Constructor কি? ঃ constructor এমন একটা মেথড য জাভাস্ক্রিপ্ট আমাদের প্রোভাইড করে। যার মাধ্যমে new keyword ব্যবহার করে বিভিন্ন ধরনের object তৈরি করতে পারি।

  `const arr = new Array(10, 20, 30)
  `



note: আমরা যদি constructor দিয়ে Array তৈরি করি কিন্তু একটি নাম্বার আর্গুমেন্ট পাস করি তাহলে Array ততগুলো empty element দিয়ে তৈরি হবে।

## Rule of (new Array): ##
 1. একটি মাত্র নাম্বার দিলে সেটা element না Array এর length হিসেবে ধরা হয়।
 ২. একাধিক value দিলে সেগুলো Array এর ইলিমেন্ট হয়।
