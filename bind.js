export default (context, fn) => (...args) => fn.apply(context, args);
