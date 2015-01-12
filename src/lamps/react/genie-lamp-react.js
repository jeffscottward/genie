/**
 * @jsx React.DOM
 */

(function () {
  if (typeof define === 'function' && define.amd) {
    define(['../../genie']);
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = require('geniejs');
  } else {
    var genieUx = genie;
  }
}(this, function(genie) { 
  var UXGenie = React.createClass({
    statics: {
      customMethod: function(foo) {
        return foo === 'bar';
      }
    },
    getInitalState: function(){

    },
    getDefaultProps: function() {

    },
    componentWillReceiveProps: function() {

    },
    componentWillMount: function() {

    },
    componentDidMount: function() {

    },
    handleUserAction: function() {

    },
    handleChangeInData: function() {

    },
    render : function() {

      return <div className="genie-lamp-container" + ngShow = "!attr.rubClass" >
              <input type="text" ng-model="uxLamp.input" className="lamp-input" />
              <div ng-show="uxLamp.matchingWishes.length > 0" className="lamp-wishes-container">
                
                <div className     = "lamp-wish wish-{{wish.id}}"                                   
                     ng-repeat     = "wish in uxLamp.matchingWishes"                                
                     ng-className  = "{focused: uxLamp.focusedWish == wish}"                     
                     onclick       = "uxLamp.makeWish(wish)"                                          
                     ng-mouseenter = "uxLamp.focusOnWish(wish, false)">                         

                      <span className="wish-icon" 
                            className="{\'has-img\': wish.data.uxGenie.imgIcon, \'has-i\': wish.data.uxGenie.iIcon}">
                       
                        <img className="wish-img-icon" 
                                 ng-if="wish.data.uxGenie.imgIcon" 
                                ng-src="{{wish.data.uxGenie.imgIcon}}"/>
   
                         <i className="wish-i-icon {{wish.data.uxGenie.iIcon}}" 
                                ng-if="wish.data.uxGenie.iIcon"></i>
                      </span>

                      <span className="wish-display-text">
                        {{wish.data.uxGenie.displayText || wish.magicWords[0]}}
                      </span>
                      
                  </div>
                </div>
              </div>;
    }
  });

  React.renderComponent(
    <UXGenie ux-lamp
  			     lamp-visible="genieOn"
  			     rub-class="genie-on"
  			     rub-shortcut="32"
  			     rub-modifier="ctrlKey"
  			     rub-event-type="keypress"
  			     wish-callback="wishMade(wish)"
  			     local-storage={genieUser}/>
  );

}));