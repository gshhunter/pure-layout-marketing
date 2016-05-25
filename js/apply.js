
var _ApplicationSurvey;
var _StepIndicator;


var ApplicationSurvey = React.createClass({
    getInitialState: function () {
        _ApplicationSurvey = this;
        return {
            step: 1,
        };
    },
    render: function () {
        var survey;
        switch (this.state.step) {
            case 1: survey = <Survey1 />;
                break;
            case 2: survey = <Survey2 />;
                break;
            case 3: survey = <Survey3 />;
                break;
            case 4: survey = <Survey4 />;
                break;
           // case 5: survey = <Survey5 />;
                //break;
        };
        return (
            <div>
                <StepIndicator step={this.state.step} />
                {survey}
            </div>
        );
    }
})

var StepIndicator = React.createClass({
    getInitialState: function () {
        _StepIndicator = this;
        return {

        };
    },

    render: function () {
        return (
            <div>
                <ul className="progress-indicator">
                    <li className={this.props.step >= 1 ? "completed" : ""}> <span className="bubble"></span> 学历 </li>
                    <li className={this.props.step >= 2 ? "completed" : ""}> <span className="bubble"></span> 专业</li>
                    <li className={this.props.step >= 3 ? "completed" : ""}> <span className="bubble"></span> 学校 </li>
                    <li className={this.props.step >= 4 ? "completed" : ""}> <span className="bubble"></span> 英语成绩 </li>
                    <li className={this.props.step >= 5 ? "completed" : ""}> <span className="bubble"></span> 完成 </li>
                </ul></div>
        );
    }
});


var Survey1 = React.createClass({
    handleClick: function () {
        // _StepIndicator.changeStepState(1,true);
        _ApplicationSurvey.setState({ step: _ApplicationSurvey.state.step + 1 });
        // ReactDOM.unmountComponentAtNode(document.getElementById('example'));
        // ReactDOM.render(
        //     <Survey2 />,
        //     document.getElementById('example')
        //  );
    },
    render: function () {
        return (
            <div >
                <form className="pure-form pure-form-stacked">
                    <fieldset>
                     <legend>我的学历 （*必填）</legend>
                        <label for="xueli">我在读：</label>
                        <select id="xueli">
                            <option>高中在读</option>
                            <option>高中毕业（未参加高考）</option>
                            <option>高中毕业（有高考成绩）</option>
                            <option>大学在读</option>
                        </select>
                        <label>成绩：</label>
                        <input className="pure-input-1-24" id="name" type="text" placeholder="高考分数/GPA/平均分" ></input>
                        <button className="pure-button pure-button-primary" type="submit" onClick={this.handleClick}>下一步</button>
                    
                        </fieldset>
                </form>
            </div>
        );
    }
});


var Survey2 = React.createClass({
    handleClick: function () {
        // _StepIndicator.changeStepState(1,true);
        _ApplicationSurvey.setState({ step: _ApplicationSurvey.state.step + 1 });
        // ReactDOM.unmountComponentAtNode(document.getElementById('example'));

    },
    render: function () {
        return (
            <div>
                <form className="pure-form pure-form-stacked">
                    <fieldset>
                        <legend>我感兴趣的专业（选填）</legend>
                        <label>专业一</label>
                        <select id="zhuanye1" class="pure-input-1-2">
                            <option>商科</option>
                            <option>教育</option>
                            <option>信息技术</option>
                            <option>工程</option>
                        </select>
                        <label>专业二</label>
                        <select id="zhuanye2">
                            <option>商科</option>
                            <option>教育</option>
                            <option>信息技术</option>
                            <option>工程</option>
                        </select>

                        <label>我想读：</label>
                        <label className="pure-radio">
                            本科<input type="radio" name="want" value="bachelor" />
                        </label>
                        <label className="pure-radio">
                            专科(Tafe) <input className="pure-input-1-2" type="radio" name="want" value="tafe" />
                        </label>
                        <button className="pure-button pure-button-primary" type="submit" onClick={this.handleClick}>下一步</button>
                    </fieldset>
                </form>
            </div>
        );
    }
});

var Survey3 = React.createClass({
    handleClick: function () {
        // _StepIndicator.changeStepState(1,true);
        _ApplicationSurvey.setState({ step: _ApplicationSurvey.state.step + 1 });
        // ReactDOM.unmountComponentAtNode(document.getElementById('example'));

    },
    render: function () {
        return (
            <div>
                <form className="pure-form pure-form-stacked">
                    <fieldset>
                        <legend>想去的学校（选填）</legend>
                        <label>意向一</label>
                        <select id="xuexiao">
                            <option>莫纳什大学</option>
                            <option>墨尔本大学</option>
                            <option>悉尼大学</option>
                            <option>......</option>
                        </select>
                        <label>意向二</label>
                        <select id="xuexiao">
                            <option>莫纳什大学</option>
                            <option>墨尔本大学</option>
                            <option>悉尼大学</option>
                            <option>......</option>
                        </select>
                        <button className="pure-button pure-button-primary" type="submit" onClick={this.handleClick}>下一步</button>
                    </fieldset>
                </form>
            </div>
        );
    }
});

var Survey4 = React.createClass({
    handleClick: function () {
        // _StepIndicator.changeStepState(1,true);
        _ApplicationSurvey.setState({ step: _ApplicationSurvey.state.step + 1 });
        // ReactDOM.unmountComponentAtNode(document.getElementById('example'));

    },
    render: function () {
        return (
            <div>
                <form className="pure-form pure-form-stacked">
                    <fieldset>
                        <legend>英语成绩（选填）</legend>
                        <label>参加的考试</label>
                        <select id="yingyu">
                            <option>雅思</option>
                            <option>托福</option>
                            <option>......</option>
                        </select>
                        <label>总成绩</label>
                        <select id="chengji">
                            <option>低于5</option>
                            <option>5.0</option>
                            <option>5.5</option>
                            <option>6.0</option>
                            <option>6.5</option>
                            <option>7.0</option>
                            <option>7.5</option>
                            <option>8分或更高</option>
                        </select>
                        <button className="pure-button pure-button-primary" type="submit" onClick={this.handleClick}>完成</button>
                    </fieldset>
                </form>
            </div>
        );
    }
});

ReactDOM.render(
    <ApplicationSurvey />,
    document.getElementById('steps')
);
