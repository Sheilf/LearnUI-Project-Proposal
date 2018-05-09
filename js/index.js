var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalStyle = {
  position: 'absolute',
  padding: 10,
  top: 25,
  left: 25,
  opacity: 0,
  visibility: 'hidden',
  width: 200,
  backgroundColor: 'rgba(53, 35, 101, 0.98)'

};

var OpenModal = function (_React$Component) {
  _inherits(OpenModal, _React$Component);

  function OpenModal(props) {
    _classCallCheck(this, OpenModal);

    var _this = _possibleConstructorReturn(this, (OpenModal.__proto__ || Object.getPrototypeOf(OpenModal)).call(this, props));

    _this.state = {

      modalIsClicked: false,

      modalCloseActive: "x"
    };

    return _this;
  }

  _createClass(OpenModal, [{
    key: 'render',
    value: function render() {

      return React.createElement(
        'section',
        null,
        React.createElement(
          'div',
          { id: 'clicker' },
          React.createElement(
            'h3',
            null,
            'Sheilfer Zepeda Lopez - Let\'s Learn & LearnUI - Build schools with math'
          ),
          React.createElement(
            'p',
            null,
            'I\'m a student at Northeastern Illinois University. I\'m interested in ',
            React.createElement(
              'code',
              { className: 'alert-clicks', id: '1' },
              'education technology'
            ),
            '. I\'m specifically interested in education AI, ',
            React.createElement(
              'code',
              { className: 'alert-clicks', id: '2' },
              'school infrastructure and school building'
            ),
            ', and math learning. If the project or subject interests you, then let\'s work on some edutech ideas. Email me at eduprojectsil@gmail.com.'
          ),
          React.createElement(
            'h2',
            null,
            'What this project is'
          ),
          React.createElement(
            'p',
            null,
            'As I attend school I\'m applying some knowledge(HCI, web development, database management, and so on) and teaching myself some ReactJS skills. I\'m working on a math module that readily assists users in a myriad of ways with ',
            React.createElement(
              'code',
              { className: 'alert-clicks', id: '3' },
              ' instanced data'
            ),
            '. On a question by question basis a student will be equipped with cheat sheets, notes, dynamic hints, forums, animations, and videos in order to ',
            React.createElement(
              'code',
              { id: '4', className: 'alert-clicks' },
              'find ways to conceptualize and visualize the topics'
            ),
            '.'
          ),
          React.createElement(
            'p',
            null,
            'I think with the advent of these new era high speed technologies, we can find creative ways to ',
            React.createElement(
              'code',
              { id: '5', className: 'alert-clicks' },
              'motivate and connect schools besides hosting online platforms'
            ),
            '. The math module will require a subscription fee that returns part of the fee depending on user engagement. ',
            React.createElement(
              'code',
              { id: '6', className: 'alert-clicks' },
              'The student earns participation points as usual but they will be delivered as "coins" and at the end of the semester, these coins will return a fixed amount of the user\'s subscription to school infrastructure missions and to personalize one\'s account'
            ),
            '. I want to connect students in a more active and realistic way that respects and rewards the effort and challenge of being a student rather than to undermine their important role in our society as an inexperienced individual.'
          ),
          React.createElement(
            'p',
            null,
            'Subscription would be something like 5 or 7  dollars a month, and with whatever baseline minimum return back to school building missions. Varying levels of engagement would result in some maximum you can return. Say for example, it costs 7 dollars a month and you\'re guarunteed a baseline minimum of 25% returned and some maximum earned (50, 75, 85%, 95% whatever number ends up working out).'
          ),
          React.createElement(
            'p',
            null,
            ' It is set up this way because school and student systems vary greatly in their academic results. I want to create a small net for students that aren\'t interested or engaged by mathematics to still be able to contribute in a significant way.'
          )
        ),
        React.createElement(
          'div',
          { style: ModalStyle, id: 'modal-container' },
          React.createElement(
            'div',
            { id: 'modal-close' },
            this.state.modalCloseActive
          ),
          React.createElement('br', null),
          ' ',
          React.createElement('br', null),
          ' ',
          React.createElement('br', null),
          React.createElement(
            'div',
            { id: 'modal-content' },
            this.state.modalContent,
            ' '
          )
        )
      );
    }
  }]);

  return OpenModal;
}(React.Component);

ReactDOM.render(React.createElement(OpenModal, { textClicked: 'none' }), document.getElementById("app"));