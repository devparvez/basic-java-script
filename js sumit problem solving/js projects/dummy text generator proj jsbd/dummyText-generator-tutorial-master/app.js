const dummyText = ['Apple pie caramels cake gummi bears jelly-o danish. Macaroon shortbread pastry halvah pudding jelly-o apple pie. Icing gummies gingerbread wafer biscuit dessert cake sugar plum wafer. Candy canes chupa chups tart halvah sugar plum pastry danish cake. Sweet chocolate cake tiramisu tootsie roll croissant topping. Chocolate cake sweet cake muffin cake soufflé tiramisu marzipan. Cupcake sweet marshmallow tootsie roll gummi bears candy jelly-o sweet topping.',
'Danish tiramisu chocolate bar jelly-o sesame snaps liquorice candy jelly beans dragée. Sesame snaps cake marzipan lemon drops sweet roll sweet. Donut biscuit candy canes tootsie roll jelly beans carrot cake. Gingerbread chocolate bar wafer gummies pudding. Dragée jujubes chocolate bar sweet bonbon gingerbread bear claw chocolate wafer. Chupa chups jelly-o croissant liquorice caramels. Brownie wafer cheesecake tiramisu apple pie sweet. Candy chupa chups dessert chupa chups jelly cake jelly tart gingerbread. Danish sugar plum sugar plum cupcake gummies tootsie roll gummi bears liquorice.',
'Candy chupa chups dragée chocolate cotton candy apple pie halvah pudding. Muffin wafer sweet pie gingerbread carrot cake. Lemon drops chocolate lemon drops lemon drops tiramisu chocolate. Croissant cupcake candy canes cotton candy chupa chups chocolate bar. Chupa chups chocolate jelly beans lollipop donut gingerbread. Danish topping sweet roll chocolate cake chocolate cake pastry. Croissant tart pie pie brownie lollipop cookie. Sugar plum sesame snaps bear claw bear claw cotton candy dessert cookie tiramisu.',
'Sesame snaps halvah muffin bear claw gummies jujubes marzipan pudding toffee. Macaroon danish fruitcake carrot cake icing muffin. Soufflé oat cake pastry bonbon ice cream jelly beans dessert candy biscuit. Oat cake cookie gummies macaroon sweet roll danish. Chupa chups marshmallow ice cream oat cake danish jelly. Cotton candy lollipop chupa chups shortbread macaroon soufflé chocolate cake. Sugar plum dessert toffee jelly lollipop chocolate pastry jelly beans. Cupcake pastry jelly-o ice cream lollipop chupa chups oat cake.',
'Jujubes sugar plum fruitcake carrot cake soufflé chupa chups bonbon chocolate bar. Dragée sweet gummi bears caramels pastry sesame snaps dessert. Lemon drops cake dragée ice cream sweet danish jujubes jelly beans lemon drops. Apple pie macaroon lemon drops sweet roll muffin candy fruitcake. Marzipan pie pudding dragée soufflé bear claw jelly beans powder jelly-o. Sugar plum tart caramels biscuit muffin croissant donut. Chocolate cake cheesecake cupcake toffee toffee oat cake jelly beans tiramisu danish. Icing liquorice sesame snaps tart dragée jelly gingerbread fruitcake croissant. Bonbon tart donut sugar plum cupcake jelly sweet roll. Dessert danish gingerbread pie jelly donut sweet roll croissant.',
'Macaroon carrot cake biscuit topping cotton candy donut pie toffee. Cotton candy toffee jelly beans gummies danish bonbon lollipop jelly beans shortbread. Cake fruitcake jelly muffin cake lollipop bonbon dessert pie. Shortbread chocolate bar cotton candy tootsie roll halvah macaroon lemon drops shortbread croissant. Danish cake chocolate bar tootsie roll fruitcake bear claw pie sweet. Brownie bear claw wafer pudding tiramisu fruitcake. Chocolate bar sugar plum tootsie roll jujubes jelly beans. Tootsie roll fruitcake liquorice shortbread pudding bonbon.',
'Dragée candy canes jelly dessert caramels caramels oat cake chocolate cake oat cake. Wafer gummies marshmallow cookie bear claw cheesecake pastry. Apple pie shortbread candy gingerbread apple pie candy canes liquorice. Pudding marshmallow marzipan chocolate cake tootsie roll croissant halvah. Marzipan pie danish sesame snaps bonbon liquorice bear claw topping dessert. Sugar plum cake donut caramels topping tart. Shortbread marzipan pudding marshmallow marzipan croissant bonbon cheesecake. Wafer liquorice sugar plum sugar plum chocolate cake croissant sugar plum halvah brownie.',
'Pie fruitcake dessert topping chocolate bar sweet roll. Caramels soufflé jelly-o pie jelly sweet roll caramels halvah topping. Liquorice macaroon muffin bonbon biscuit cupcake biscuit sweet roll bear claw. Chocolate soufflé halvah pudding ice cream sugar plum. Jujubes candy sweet roll cheesecake cake candy canes soufflé. Sesame snaps liquorice halvah lollipop pudding pastry. Pastry apple pie marzipan chocolate lemon drops dessert cake sugar plum. Sesame snaps cupcake bonbon gingerbread bear claw. Chocolate bar wafer chocolate cake marzipan cake chocolate.',
'Pie gummies cake tart chocolate cake chocolate cake cookie. Halvah sugar plum sugar plum liquorice liquorice croissant jelly-o pastry bear claw. Jelly-o liquorice donut cheesecake tootsie roll chocolate cake lollipop. Pudding dragée jelly soufflé sesame snaps gummies. Tootsie roll cake gingerbread shortbread cotton candy chupa chups pastry danish dessert. Tart lollipop cake candy canes candy pie marzipan. Ice cream cake brownie cupcake sweet marshmallow oat cake gummi bears. Shortbread jelly-o jelly tart powder jujubes croissant.',
'Sweet tootsie roll bear claw caramels carrot cake. Pastry chocolate bonbon donut candy canes icing jujubes biscuit macaroon. Apple pie tart oat cake halvah shortbread topping lemon drops tiramisu. Ice cream carrot cake marshmallow biscuit macaroon sweet roll chocolate cake brownie. Biscuit dragée cupcake halvah jelly beans. Tootsie roll icing candy biscuit lollipop topping topping tiramisu. Chupa chups jelly dessert powder shortbread lollipop pie.'];
// selecting elements
const form = document.querySelector('#form');
const amount = document.querySelector('#amount');
const result = document.querySelector('#result');
//Event listener

form.addEventListener('submit',function(e){
  e.preventDefault();
  const value = parseInt(amount.value);
  const random = Math.floor((Math.random()*dummyText.length));

  // If value empty,negative and ,greater than 9
  if(isNaN(value) || value <=0 || value > 9){
    result.innerHTML = `<p>${dummyText[random]} </p>`;
  }else{
    const slicedArray = dummyText.slice(0,value);
    const finalArray = slicedArray.map(function(singleDummy){
      return `<p>${singleDummy}</p>`

    }).join('');
   result.innerHTML = finalArray; 
  }
  
  
})