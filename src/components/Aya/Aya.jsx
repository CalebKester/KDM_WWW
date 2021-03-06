import React, { Component } from 'react';
import { Link } from 'react-router';
import { Modal, ModalHeader, ModalBody, ModalFooter, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, ButtonGroup, Row, Col } from 'reactstrap';
import AyaColor from './Aya-Color';
import Stat from '../../components/Stats/Stats';
import CardList from '../../components/CardList/CardList';
import StatAdjust from '../../components/Stats/StatAdjust';
import StatSurvival from '../../containers/StatWidget/StatWidget-Example';
import SurvivorAbilities from '../../components/Survivor/SurvivorAbilities';
import SurvivorArmor from '../../components/Survivor/SurvivorArmor';
import SurvivorBleeding from '../../components/Survivor/SurvivorBleeding';
import SurvivorDisorders from '../../components/Survivor/SurvivorDisorders';
import SurvivorFightArts from '../../components/Survivor/SurvivorFightArts';
import SurvivorImpairments from '../../components/Survivor/SurvivorImpairments';
import SurvivorNotes from '../../components/Survivor/SurvivorNotes';
import SurvivorStats from '../../components/Survivor/SurvivorStats';
import SurvivorSurvival from '../../components/Survivor/SurvivorSurvival';
import SurvivorXP from '../../components/Survivor/SurvivorXP';
import Milestone from '../../components/Milestone/Milestone';
import Icon from '../../components/Icon/Icon';

class Aya extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ayaData: null,
			modal: false,
			activeTab: '1',
			listMeta: [
				{
					name: 'Lantern Year',
					value: '5',
				},
				{
					name: 'Population',
					value: '15',
				},
				{
					name: 'Players',
					value: '3',
				},
			],
			statXP: {
				name: 'Hunt XP',
				amount: 8,
				max: 16,
				min: 0,
				milestones: [
					{
						at: 2,
						name: 'Age 1',
						type: 'story',
					},
					{
						at: 6,
						name: 'Age 2',
						type: 'story',
					},
					{
						at: 10,
						name: 'Age 3',
						type: 'story',
					},
					{
						at: 15,
						name: 'Age 4',
						type: 'story',
					},
					{
						at: 16,
						name: 'Retired',
						type: 'story',
					},
				],
			},

		};
		this.toggle = this.toggle.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab,
			});
		}
	}
	toggleModal() {
		this.setState({
			modal: !this.state.modal,
		});
	}
	render() {
		return (
			<div className="page-aya">
				<h1>Style Guide</h1>
				<Link to="/campaign">test</Link>


				<br />

				<h3>Fonts</h3>
				<p>We use <a href="https://fonts.google.com/specimen/Ruda">Ruda</a> font with a base fontsize of 16px</p>

				<h1 className="ayah1">h1</h1>
				<p>Used at the top of pages in the title bar pattern.</p>

				<h2 className="ayah2">h2</h2>
				<p>Used as the heading of the boxes and widgets patterns.</p>

				<br />

				<h3>Colors</h3>

				<br />

				<h4>Brand Colors</h4>
				<AyaColor name="brand-primary" />
				<AyaColor name="body-color" />

				<br />

				<h4>Grays</h4>
				<AyaColor name="gray-dark" />
				<AyaColor name="gray-darker" />
				<AyaColor name="gray" />
				<AyaColor name="gray-light" />
				<AyaColor name="gray-lighter" />
				<AyaColor name="gray-lightest" />

				<br />

				<h4>UI</h4>
				<p>These are bootstrap default styles. We&lsquo;ll probably use some of them but currently there&lsquo;s no place in the ui for them.</p>
				<AyaColor name="brand-success" />
				<AyaColor name="brand-info" />
				<AyaColor name="brand-warning" />
				<AyaColor name="brand-danger" />
				<br />
				<br />

				<h3>Buttons</h3>
				<Button color="primary">primary</Button>{' '}
				<Button color="secondary">secondary</Button>{' '}
				<Button color="success">success</Button>{' '}
				<Button color="info">info</Button>{' '}
				<Button color="warning">warning</Button>{' '}
				<Button color="danger">danger</Button>{' '}
				<Button color="link">link</Button>

				<br />
				<br />

				<h3>Icons</h3>

				<Icon name="logo" />
				<Icon name="settlement" />
				<Icon name="faq" />
				<Icon name="log" />
				<Icon name="storage" />
				<Icon name="survivors" />

				<br />
				<br />

				<h3>Modal</h3>
				<Button onClick={this.toggleModal}>Toggle Modal</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
					<ModalBody>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</ModalBody>
					<ModalFooter>
						<ButtonGroup className="btn-group--full">
							<Button color="primary" onClick={this.toggle}>Do Something</Button>
							<Button color="secondary" onClick={this.toggle}>Cancel</Button>
						</ButtonGroup>
					</ModalFooter>
				</Modal>

				<br /><br />

				<h2>Patterns</h2>

				<h3>Box</h3>

				<div className="box">
					<header className="box-header">
						<div className="box-header-title">Box</div>
					</header>
					<div className="box-content">
						A box is a container to put things in
					</div>
				</div>
				<br />

				<div className="box">
					<header className="box-header">
						<div className="box-header-title">Box</div>
					</header>
					<button className="box-content">
						You can make me clickable
					</button>
				</div>

				<br />
				<br />

				<h3>CardList</h3>

				<CardList
					name="Name"
					desc="Description"
					meta={['Lantern Year 4', 'Population 15', 'Players 3']}
				/>


				<br />
				<br />

				<h3>Stats</h3>
				<p>Shows data, supports <em>amount</em>, <em>max</em>, <em>min</em>, <em>milestones</em>, <em>title</em></p>
				<div style={{ width: '200px' }}>
					<Stat
						name={this.state.statXP.name}
						amount={this.state.statXP.amount}
						max={this.state.statXP.max}
						min={this.state.statXP.min}
						milestone={this.state.statXP.milestones}
					/>
				</div>
				<br />

				<h4>Stat Adjustor</h4>
				<div style={{ width: '200px' }}>
					<StatAdjust
						name={this.state.statXP.name}
						amount={this.state.statXP.amount}
						max={this.state.statXP.max}
						min={this.state.statXP.min}
						milestone={this.state.statXP.milestones}
					/>
				</div>



				<h2>Components</h2>

				<h3>Milestones</h3>
				<Milestone /> &lt;Milestone /&gt;<br />
				<Milestone type="default" /> &lt;Milestone type=&quot;default&quot; /&gt;<br />
				<Milestone type="defaultEvent" /> &lt;Milestone type=&quot;defaultEvent&quot; /&gt;<br />
				<Milestone type="active" /> &lt;Milestone type=&quot;active&quot; /&gt;<br />
				<Milestone type="activeEvent" /> &lt;Milestone type=&quot;activeEvent&quot; /&gt;

				<br /><br />
				<h3>Stat Box</h3>

				<StatSurvival
					title="Survival"
				/>

				<br />
				<h4>Survival</h4>

				<div className="boxGroup">
					<SurvivorSurvival
						amount={5}
						max={7}
					/>
					<SurvivorBleeding
						amount={0}
					/>
					<SurvivorXP
						amount={5}
						max={7}
					/>
				</div>

				<div className="boxGroup">
					<SurvivorStats
						amount={5}
						max={7}
					/>
				</div>

				<div className="boxGroup">
					<SurvivorArmor
						amount={5}
						max={7}
					/>
				</div>

				<div className="boxGroup">
					<SurvivorFightArts
						amount={5}
						max={7}
					/>
					<SurvivorDisorders
						amount={5}
						max={7}
					/>
				</div>

				<div className="boxGroup">
					<SurvivorAbilities
						amount={5}
						max={7}
					/>
				</div>

				<div className="boxGroup">
					<SurvivorImpairments
						amount={5}
						max={7}
					/>
				</div>

				<div className="boxGroup">
					<SurvivorNotes
						amount={5}
						max={7}
					/>
				</div>
			</div>
		);
	}
}

export default Aya;
