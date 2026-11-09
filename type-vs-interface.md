<h1>Type Aliases vs Interfaces in TypeScript</h1>
TypeScript provide two ways to create custom data types. One is <b>Type aliases</b>; the other is <b>Interfaces.</b> This blog post will discuss the similarities and differences between Type aliases and interfaces. </br>

<h2>Type aliases</h2>
Type aliases give us the option to give a name to any type (primitive, object, function, union, or intersection). Type aliases are useful for readability and reusability. Type aliases can be used to give custom types for objects and arrays.</br>
<b>Example: </b>
<pre>
type InputTypes= string 
type Address = readonly [number, number, string];

//Object
type Post = {
title: string;
content: string;
author: string;
}

//Union
type InputTypes= string | number | boolean;

//Intersections
type publish = Post &{
publishDate: 09-11-2026
}

</pre>
<h2>Interface</h2>
An interface is another way to define the shape of an object.</br>
<b>Example: </b>
<pre>
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
</pre>

<h4>Key Differences Between Type Aliases and Interfaces are: </h4>
Type aliases can work with primitives and union types, but interfaces only work with objects.</br>
Declaration Merging is possible with interfaces only. </br>
Type aliases are best for function types.It provides shorter syntax and supports advanced type features.
