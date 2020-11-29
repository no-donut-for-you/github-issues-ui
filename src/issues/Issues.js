import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MainAppBar from '../components/MainAppBar';
import {
  Grid,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';
import SelectField from '../components/SelectField';

import {clear, listIssues} from './IssuesActions';

class Issues extends React.Component {
  static propTypes = {
    listIssues: PropTypes.func.isRequired
  }

  state = {
    loading: false,
    username: 'rails',
    repository: 'rails',
    filters: {
      labels: '',
      sort: 'comments',
      direction: 'desc',
      page: 1,
      per_page: 5,
    },
    issues: [],
  }

  componentDidMount() {
    document.title = 'Github - Issues';

    const {
      username,
      repository,
      filters
    } = this.state;

    this.props.listIssues(username, repository, filters).then(() => {
      const issues = this.props.issues;

      this.setState({
        ...this.state,
        issues
      });
    });
  }

  componentWillUnmount() {
    this.props.clear();
  }

  submit() {
    const {
      username,
      repository,
      filters
    } = this.state;

    this.props.listIssues(username, repository, filters).then(() => {
      const issues = this.props.issues;

      this.setState({
        ...this.state,
        issues
      });
    });
  }

  onChange = async value => {
    await this.setState({
      filters: {
        ...this.state.filters,
        ...value
      }
    });

    this.submit();
  }

  onClickPagination = async (_, page) => {
    await this.setState({
      filters: {
        ...this.state.filters,
        page
      }
    });

    this.submit();
  }

  displayLabels = labels => {
    const labelNames = labels.map(label => {
      return <Chip label={label.name}/>
    });

    return labelNames;
  }

  render() {
    const sortDirection = [{ name: 'Asc', id: 'asc' }, { name: 'Desc', id: 'desc' }];
    const labels = [
      {
        name: 'ActionCable',
        id: 'actioncable'
      },
      {
        name: 'ActionMailer',
        id: 'actionmailer'
      },
      {
        name: 'ActionPack',
        id: 'actionpack'
      },
      {
        name: 'ActionView',
        id: 'actionview'
      },
      {
        name: 'ActiveJob',
        id: 'activejJob'
      },
      {
        name: 'ActiveModel',
        id: 'activemodel'
      },
      {
        name: 'ActiveRecord',
        id: 'activerecord'
      },
      {
        name: 'ActiveStorage',
        id: 'activestorage'
      },
      {
        name: 'ActiveSupport',
        id: 'activesupport'
      },
      {
        name: 'AssetPipeline',
        id: 'assetpipeline'
      },
    ];

    return (
      <React.Fragment>
        <MainAppBar />

        <main>
          <Grid container spacing={3} justify="center" alignItems="center" className="filters-menu">
            <Grid item xs={2}>
              <SelectField
                id="labels"
                name="labels"
                label="Label"
                value={this.state.filters.label}
                items={labels}
                onChange={this.onChange}
              />
            </Grid>

            <Grid item xs={2}>
              <SelectField
                id="direction"
                name="direction"
                label="Comments Count Sort"
                value={this.state.filters.direction}
                items={sortDirection}
                onChange={this.onChange}
              />
            </Grid>
          </Grid>

          <Grid container direction="column" justify="center" alignItems="center" className="issues-list">
            <Grid item xs={12}>
              <TableContainer component={Paper} className="issues-list__table">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell align="left">Title</TableCell>
                      <TableCell align="left">Comments</TableCell>
                      <TableCell align="left">State</TableCell>
                      <TableCell align="left">Labels</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {this.state.issues.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>

                        <TableCell align="left">{row.title}</TableCell>
                        <TableCell align="left">{row.comments}</TableCell>
                        <TableCell align="left">{row.state}</TableCell>
                        <TableCell align="left">{this.displayLabels(row.labels)}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            <Grid item xs={12} className="pagination">
              <Pagination count={10} variant="outlined" onChange={this.onClickPagination}/>
            </Grid>
          </Grid>
        </main>
      </React.Fragment>
    );
  }
}

const mapDispatcherToPros = dispatcher => ({
  clear: () => dispatcher(clear()),
  listIssues: (username, repository, filters) => dispatcher(listIssues(username, repository, filters))
});

const mapStateToProps = state => {
  const {issues: listIssuesState} = state;

  return {...listIssuesState};
};

export default connect(mapStateToProps, mapDispatcherToPros)(Issues);
