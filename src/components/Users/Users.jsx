import React from 'react';
import css from './Users.module.css';
import avatar from './../../assets/image/avajpg.jpg';
import {NavLink} from "react-router-dom";

const Users = (props) => {
	let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}
	return (
		<>
			<ul>
				{pages.map(i => {
					if (i <= 10) {
						return (
							<li key={Math.random()}>
								<button className={css.paginationBtn + ' ' + (props.currentPage === i ? css.currentPage : '')}
								        onClick={(e) => {
									        props.onPageChanged(i)
								        }}>{i}</button>
							</li>
						)
					}
				})}
			</ul>

			<div className={css.usersList}>
				{props.users.map(u => {
					return (
						<div className={css.userCard} key={u.id * Math.random()}>
							<div>
								<div className={css.photoWrapper}>
									<img src={u.photos.small || avatar} alt="avatar"/>
								</div>
								{u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
									<button onClick={() => props.follow(u.id)}>Follow</button>}
							</div>
							<div className={css.userInfo}>
								<NavLink to={`/profile/${u.id}`}>
									<h3>{u.name}</h3>
								</NavLink>
								<h4>{u.status}</h4>
								<div className={css.userLocation}>
									{/*<div>{u.location.country}</div>*/}
									{/*<div>{u.location.city}</div>*/}
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}


export default Users;