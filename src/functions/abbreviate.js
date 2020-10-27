export default function abbreviate(str, max, suffix)
{
  if((str = str.replace(/^\s+|\s+$/g, '').replace(/[\r\n]*\s*[\r\n]+/g, ' ').replace(/[ \t]+/g, ' ')).length <= max)
  {
    return str;
  }
  
  var 
  abbr = '',
  str = str.split(' '),
  suffix = (typeof suffix !== 'undefined' ? suffix : '...'),
  max = (max - suffix.length);
  
  for(var len = str.length, i = 0; i < len; i ++)
  {
    if((abbr + str[i]).length < max)
    {
      abbr += str[i] + ' ';
    }
    else { break; }
  }

  return abbr.replace(/[ ]$/g, '') + suffix;
}
