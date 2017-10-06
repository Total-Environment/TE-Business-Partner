angular.module('', ['ionic'])
.directive('onValidSubmit', ['$parse', '$timeout', function($parse, $timeout) {
    return {
      require: '^form',
      restrict: 'A',
      link: function(scope, element, attrs, form) {
        form.$submitted = false;
        var fn = $parse(attrs.onValidSubmit);
        element.on('submit', function(event) {
          scope.$apply(function() {
            element.addClass('ng-submitted');
            form.$submitted = true;
            if (form.$valid) {
              if (typeof fn === 'function') {
                fn(scope, {$event: event});
              }
            }
          });
        });
      }
    }
 
  }])
  .directive('validated', ['$parse', function($parse) {
    return {
      restrict: 'AEC',
      require: '^form',
      link: function(scope, element, attrs, form) {
        var inputs = element.find("*");
        for(var i = 0; i < inputs.length; i++) {
          (function(input){
            var attributes = input.attributes;
            if (attributes.getNamedItem('ng-model') != void 0 && attributes.getNamedItem('name') != void 0) {
              var field = form[attributes.name.value];
              if (field != void 0) {
                scope.$watch(function() {
                  return form.$submitted + "_" + field.$valid;
                }, function() {
                  if (form.$submitted != true) return;
                  var inp = angular.element(input);
                  if (inp.hasClass('ng-invalid')) {
                    element.removeClass('has-success');
                    element.addClass('has-error');
                  } else {
                    element.removeClass('has-error').addClass('has-success');
                  }
                });
              }
            }
          })(inputs[i]);
        }
      }
    }




//added second div with class item-options-left for the left buttons

var ITEM_TPL_OPTION_BUTTONS =
'<div class="item-options invisible">' +
'</div>' + '<div class="item-options-left invisible">' + 
'</div>';
IonicModule.directive('ionOptionButton', [function () {
function stopPropagation(e) {
e.stopPropagation();
}
return {
restrict: 'E',
require: '^ionItem',
priority: Number.MAX_VALUE,
compile: function ($element, $attr) {
    $attr.$set('class', ($attr['class'] || '') + ' button', true);
    return function ($scope, $element, $attr, itemCtrl) {

        if (!itemCtrl.optionsContainer) {
            itemCtrl.optionsContainer = jqLite(ITEM_TPL_OPTION_BUTTONS);
            itemCtrl.$element.append(itemCtrl.optionsContainer);
        }

        //[NEW] if it as an attribute side = 'left' put the button in the left container
        if ($attr.side === 'left') {
            angular.element(itemCtrl.optionsContainer[1]).append($element);
            itemCtrl.$element.addClass('item-left-editable');
        } else{
            angular.element(itemCtrl.optionsContainer[0]).append($element);
            itemCtrl.$element.addClass('item-right-editable');
        }

        //Don't bubble click up to main .item
        $element.on('click', stopPropagation);
    };
}
};
}]);

//[NEW] add this var to the others in the function
var ITEM_OPTIONS_CLASS_RIGHT = 'item-options-left';

var SlideDrag = function (opts) {
        this.dragThresholdX = opts.dragThresholdX || 10;
        this.el = opts.el;
        this.item = opts.item;
        this.canSwipe = opts.canSwipe;
    };

    SlideDrag.prototype = new DragOp();

    SlideDrag.prototype.start = function (e) {
        var content, buttonsLeft, buttonsRight, offsetX, buttonsLeftWidth, buttonsRightWidth;

        if (!this.canSwipe().isSwipeable) {
            return;
        }

        if (e.target.classList.contains(ITEM_CONTENT_CLASS)) {
            content = e.target;
        } else if (e.target.classList.contains(ITEM_CLASS)) {
            content = e.target.querySelector('.' + ITEM_CONTENT_CLASS);
        } else {
            content = ionic.DomUtil.getParentWithClass(e.target, ITEM_CONTENT_CLASS);
        }

        // If we don't have a content area as one of our children (or ourselves), skip
        if (!content) {
            return;
        }

        // Make sure we aren't animating as we slide
        content.classList.remove(ITEM_SLIDING_CLASS);

        // Grab the starting X point for the item (for example, so we can tell whether it is open or closed to start)
        offsetX = parseFloat(content.style[ionic.CSS.TRANSFORM].replace('translate3d(', '').split(',')[0]) || 0;

        // Grab the buttons
        buttonsLeft = content.parentNode.querySelector('.' + ITEM_OPTIONS_CLASS);
        if (!buttonsLeft) {
            return;
        }

        //[NEW] get the Right buttons
        buttonsRight = content.parentNode.querySelector('.' + ITEM_OPTIONS_CLASS_RIGHT);
        if (!buttonsRight) {
            return;
        }

        // [NEW] added the same functionality to both sides, to make buttons visible when dragged
        if(e.gesture.direction === "left")
            buttonsLeft.classList.remove('invisible');
        else
            buttonsRight.classList.remove('invisible');

        //[NEW] added buttonRight and buttonLeft properties to currentDrag

        buttonsLeftWidth = buttonsLeft.offsetWidth;
        buttonsRightWidth = buttonsRight.offsetWidth;

        this._currentDrag = {
            buttonsLeft: buttonsLeft,
            buttonsRight: buttonsRight,
            buttonsLeftWidth: buttonsLeftWidth,
            buttonsRightWidth: buttonsRightWidth,
            content: content,
            startOffsetX: offsetX
        };
    };

    /**
     * Check if this is the same item that was previously dragged.
     */
    SlideDrag.prototype.isSameItem = function (op) {
        if (op._lastDrag && this._currentDrag) {
            return this._currentDrag.content == op._lastDrag.content;
        }
        return false;
    };

    SlideDrag.prototype.clean = function (isInstant) {
        var lastDrag = this._lastDrag;

        if (!lastDrag || !lastDrag.content) return;

        lastDrag.content.style[ionic.CSS.TRANSITION] = '';
        lastDrag.content.style[ionic.CSS.TRANSFORM] = '';
        if (isInstant) {
            lastDrag.content.style[ionic.CSS.TRANSITION] = 'none';
            makeInvisible();
            ionic.requestAnimationFrame(function () {
                lastDrag.content.style[ionic.CSS.TRANSITION] = '';
            });
        } else {
            ionic.requestAnimationFrame(function () {
                setTimeout(makeInvisible, 250);
            });
        }

        function makeInvisible() {
            lastDrag.buttonsLeft && lastDrag.buttonsLeft.classList.add('invisible');
            lastDrag.buttonsRight && lastDrag.buttonsRight.classList.add('invisible');
        }
    };

    SlideDrag.prototype.drag = ionic.animationFrameThrottle(function (e) {
        var buttonsLeftWidth;
        var buttonsRightWidth;

        // We really aren't dragging
        if (!this._currentDrag) {
            return;
        }

        // Check if we should start dragging. Check if we've dragged past the threshold,
        // or we are starting from the open state.
        if (!this._isDragging &&
            ((Math.abs(e.gesture.deltaX) > this.dragThresholdX) ||
                (Math.abs(this._currentDrag.startOffsetX) > 0))) {
            this._isDragging = true;
        }

        if (this._isDragging) {
            buttonsLeftWidth = this._currentDrag.buttonsLeftWidth;
            buttonsRightWidth = this._currentDrag.buttonsRightWidth;

            // Grab the new X point, capping it at zero
            //[NEW] added right swipe new position
            if (this.canSwipe().side === 'left' || (this.canSwipe().side === 'both' && e.gesture.direction === 'left'))
                var newX = Math.min(0, this._currentDrag.startOffsetX + e.gesture.deltaX);
            else if (this.canSwipe().side === 'right' || (this.canSwipe().side === 'both' && e.gesture.direction === 'right'))
                var newX = Math.max(0, this._currentDrag.startOffsetX + e.gesture.deltaX);

            var buttonsWidth = 0;
            if (e.gesture.direction === 'right')
                buttonsWidth = buttonsRightWidth;
            else
                buttonsWidth = buttonsLeftWidth;
            // If the new X position is past the buttons, we need to slow down the drag (rubber band style) 
            if (newX < -buttonsWidth) {
                // Calculate the new X position, capped at the top of the buttons
                newX = Math.min(-buttonsWidth, -buttonsWidth + (((e.gesture.deltaX + buttonsWidth) * 0.4)));
            }



            this._currentDrag.content.$$ionicOptionsOpen = newX !== 0;

            this._currentDrag.content.style[ionic.CSS.TRANSFORM] = 'translate3d(' + newX + 'px, 0, 0)';
            this._currentDrag.content.style[ionic.CSS.TRANSITION] = 'none';
        }
    });

    SlideDrag.prototype.end = function (e, doneCallback) {
        var self = this;

        // There is no drag, just end immediately
        if (!self._currentDrag) {
            doneCallback && doneCallback();
            return;
        }

        // If we are currently dragging, we want to snap back into place
        // The final resting point X will be the width of the exposed buttons
        var restingPoint;
        if (e.gesture.direction === 'left' && (this.canSwipe().side === 'left' || this.canSwipe().side === 'both'))
            restingPoint = -self._currentDrag.buttonsLeftWidth;
        if (e.gesture.direction === 'right' && (this.canSwipe().side === 'right' || this.canSwipe().side === 'both'))
            restingPoint = self._currentDrag.buttonsRightWidth;

        // Check if the drag didn't clear the buttons mid-point
        // and we aren't moving fast enough to swipe open
        var buttonsWidth = 0;
        if (e.gesture.direction === 'right') 
            buttonsWidth = self._currentDrag.buttonsRightWidth;
        else 
            buttonsWidth = self._currentDrag.buttonsLeftWidth;
        if (e.gesture.deltaX > -(buttonsWidth / 2)) {

            // If we are going left or right but too slow, or going right, go back to resting
            if ((e.gesture.direction == "left" || e.gesture.direction == "right")  && Math.abs(e.gesture.velocityX) < 0.3) {
                restingPoint = 0;
            } 

        }

        ionic.requestAnimationFrame(function () {
            if (restingPoint === 0) {
                self._currentDrag.content.style[ionic.CSS.TRANSFORM] = '';
                var buttonsLeft = self._currentDrag.buttonsLeft;
                var buttonsRight = self._currentDrag.buttonsRight;
                setTimeout(function () {
                    buttonsLeft && buttonsLeft.classList.add('invisible');
                    buttonsRight && buttonsRight.classList.add('invisible');
                }, 250);
            } else {
                self._currentDrag.content.style[ionic.CSS.TRANSFORM] = 'translate3d(' + restingPoint + 'px,0,0)';
            }
            self._currentDrag.content.style[ionic.CSS.TRANSITION] = '';


            // Kill the current drag
            if (!self._lastDrag) {
                self._lastDrag = {};
            }
            ionic.extend(self._lastDrag, self._currentDrag);
            if (self._currentDrag) {
                self._currentDrag.buttons = null;
                self._currentDrag.content = null;
            }
            self._currentDrag = null;

            // We are done, notify caller
            doneCallback && doneCallback();
        });
    };

      // Load the modal from the given template URL
  $ionicModal.fromTemplateUrl('login.html', function(modal) {
    $scope.modal = modal;
  }, {
    // Use our scope for the scope of the modal to keep it simple
    scope: $scope,
    // The animation we want to use for the modal entrance
    animation: 'slide-in-up'
  });  

  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };  


       // Load the modal from the given template URL
       $ionicModal.fromTemplateUrl('popup.html', function(modal1) {
        $scope.modal1 = modal1;
      }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
      });  
    
      $scope.openModal = function() {
        $scope.modal1.show();
      };
      $scope.closeModal = function() {
        $scope.modal1.hide();
      };  
  }]);