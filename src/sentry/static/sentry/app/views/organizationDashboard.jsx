import React from 'react';
import {Link} from 'react-router';

import GroupStore from '../stores/groupStore';
import IssueList from '../components/issueList';
import OrganizationHomeContainer from '../components//organizations/homeContainer';

const AssignedIssues = React.createClass({
  getEndpoint() {
    return `/organizations/${this.props.params.orgId}/members/me/issues/assigned/`;
  },

  getViewMoreLink() {
    return `/organizations/${this.props.params.orgId}/issues/assigned/`;
  },

  render() {
    return (
      <div>
        <div className="pull-right">
          <Link className="btn btn-sm btn-default" to={this.getViewMoreLink()}>View more</Link>
        </div>
        <h3>Assigned</h3>
        <IssueList endpoint={this.getEndpoint()} query={{
          statsPeriod: this.props.statsPeriod,
          per_page: this.props.pageSize,
        }} {...this.props} />
      </div>
    );
  },
});

const OrganizationDashboard = React.createClass({
  getDefaultProps() {
    return {
      statsPeriod: '24h',
      pageSize: 5,
    };
  },

  componentWillUnmount() {
    GroupStore.reset();
  },

  render() {
    return (
      <OrganizationHomeContainer>
        <div className="alert alert-block alert-info">Psst! This feature is still a work-in-progress. Thanks for being an early adopter!</div>
        <div className="row">
          <div className="col-md-8">
            <AssignedIssues {...this.props} />
            <AssignedIssues {...this.props} />
          </div>
          <div className="col-md-4">
            <AssignedIssues {...this.props} />
          </div>
        </div>
      </OrganizationHomeContainer>
    );
  },
});

export default OrganizationDashboard;
